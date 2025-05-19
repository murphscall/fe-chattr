"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import { theme } from "./styles/theme"
import type { Message, ChatRoom } from "./types"
import { dummyChatRooms, dummyMessages } from "./dummyData" // 더미 데이터 임포트
import { useState, useEffect } from "react"
import { useAuth } from "./hooks/useAuth"
import * as chatService from "./services/chat"

// 페이지 컴포넌트 임포트
import MainPage from "./pages/MainPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ChatListPage from "./pages/ChatListPage"
import ChatRoomPage from "./pages/ChatRoomPage"
import MyPage from "./pages/MyPage"
import LoadingSpinner from "./components/LoadingSpinner"

function App() {
    const { user, loading, login, logout, register } = useAuth()
    const [chatRooms, setChatRooms] = useState<ChatRoom[]>(dummyChatRooms) // 더미 데이터 사용
    const [messages, setMessages] = useState<Record<string, Message[]>>(dummyMessages) // 더미 데이터 사용
    const [isAppLoading, setIsAppLoading] = useState(true)

    // 페이지 전환 시 스크롤 위치 초기화
    useEffect(() => {
        const handleRouteChange = () => {
            window.scrollTo(0, 0)
        }

        // 라우트 변경 감지 및 스크롤 초기화
        window.addEventListener("popstate", handleRouteChange)

        return () => {
            window.removeEventListener("popstate", handleRouteChange)
        }
    }, [])

    useEffect(() => {
        // 인증 로딩이 완료되면 앱 로딩 상태 해제
        if (!loading) {
            setIsAppLoading(false)
        }
    }, [loading])

    useEffect(() => {
        if (!user) return

        // 채팅방 목록 가져오기
        const fetchChatRooms = async () => {
            try {
                const rooms = await chatService.getChatRooms()
                setChatRooms(rooms)
            } catch (error) {
                console.error("채팅방 목록을 가져오는데 실패했습니다:", error)
            }
        }

        fetchChatRooms()

        // 실시간 메시지 수신을 위한 웹소켓 연결 설정
        // 실제 구현 시 아래 주석을 해제하고 웹소켓 연결 코드로 대체
        /*
        const socket = new WebSocket('wss://your-websocket-server.com');

        socket.onopen = () => {
          console.log('웹소켓 연결 성공');
        };

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);

          if (data.type === 'new_message') {
            setMessages(prev => ({
              ...prev,
              [data.roomId]: [...(prev[data.roomId] || []), data.message]
            }));
          } else if (data.type === 'chat_rooms_update') {
            setChatRooms(data.rooms);
          }
        };

        return () => {
          socket.close();
        };
        */
    }, [user])

    const handleSendMessage = async (roomId: string, content: string) => {
        if (!user) return

        try {
            // API 요청: 메시지 전송
            const sentMessage = await chatService.sendMessage(roomId, content)

            // 메시지 목록 업데이트
            setMessages((prev) => ({
                ...prev,
                [roomId]: [...(prev[roomId] || []), sentMessage],
            }))

            // 채팅방의 마지막 메시지 업데이트
            setChatRooms((prev) =>
                prev.map((room) => {
                    if (room.id === roomId) {
                        return { ...room, lastMessage: sentMessage }
                    }
                    return room
                }),
            )
        } catch (error) {
            console.error("메시지 전송 오류:", error)

            // 오류 발생 시에도 UI 업데이트 (낙관적 UI)
            if (user) {
                const newMessage: Message = {
                    id: Date.now().toString(),
                    sender: user,
                    content,
                    timestamp: new Date().toISOString(),
                }

                setMessages((prev) => ({
                    ...prev,
                    [roomId]: [...(prev[roomId] || []), newMessage],
                }))

                setChatRooms((prev) =>
                    prev.map((room) => {
                        if (room.id === roomId) {
                            return { ...room, lastMessage: newMessage }
                        }
                        return room
                    }),
                )
            }
        }
    }

    const handleCreateChatRoom = async (name: string, category: string) => {
        if (!user) return

        try {
            // API 요청: 채팅방 생성
            const createdRoom = await chatService.createChatRoom(name, category)
            setChatRooms((prev) => [...prev, createdRoom])
            return createdRoom.id
        } catch (error) {
            console.error("채팅방 생성 오류:", error)

            // 오류 발생 시에도 UI 업데이트 (낙관적 UI)
            const newRoom: ChatRoom = {
                id: Date.now().toString(),
                name,
                createdBy: user.userId,
                participants: [user],
                category: category || "일상",
                participantsCount: 1,
                isHot: false,
            }

            setChatRooms((prev) => [...prev, newRoom])
            return newRoom.id
        }
    }

    const handleJoinChatRoom = async (roomId: string) => {
        if (!user) return

        try {
            // API 요청: 채팅방 참여
            await chatService.joinChatRoom(roomId)

            // 채팅방 메시지 가져오기
            const messagesData = await chatService.getChatRoomMessages(roomId)
            setMessages((prev) => ({
                ...prev,
                [roomId]: messagesData,
            }))

            // 채팅방 목록 업데이트
            const roomsData = await chatService.getChatRooms()
            setChatRooms(roomsData)
        } catch (error) {
            console.error("채팅방 참여 오류:", error)

            // 오류 발생 시에도 UI 업데이트 (낙관적 UI)
            setChatRooms((prev) =>
                prev.map((room) => {
                    if (room.id === roomId && !room.participants.some((p) => p.userId === user.userId)) {
                        const updatedParticipants = [...room.participants, user]
                        const updatedParticipantsCount = room.participantsCount + 1
                        const isHot = updatedParticipantsCount >= 10

                        return {
                            ...room,
                            participants: updatedParticipants,
                            participantsCount: updatedParticipantsCount,
                            isHot,
                        }
                    }
                    return room
                }),
            )

            // 채팅방 메시지가 없는 경우 빈 배열로 초기화
            if (!messages[roomId]) {
                setMessages((prev) => ({
                    ...prev,
                    [roomId]: [],
                }))
            }
        }
    }

    // 회원가입 처리 함수 (자동 로그인 없음)
    const handleRegister = async (userData: {
        name: string
        email: string
        password: string
        phone?: string
    }): Promise<boolean> => {
        try {
            // 회원가입 API 호출만 하고 자동 로그인은 하지 않음
            const success = await register(userData)
            return success
        } catch (error) {
            console.error("회원가입 오류:", error)
            return false
        }
    }

    // 로딩 중일 때 표시할 컴포넌트
    if (isAppLoading) {
        return <LoadingSpinner />
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage user={user} onLogout={logout} />} />
                    <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage onLogin={login} />} />
                    <Route path="/signup" element={user ? <Navigate to="/" /> : <SignupPage onRegister={handleRegister} />} />
                    <Route
                        path="/chats"
                        element={
                            user ? (
                                <ChatListPage
                                    user={user}
                                    chatRooms={chatRooms}
                                    onCreateChatRoom={handleCreateChatRoom}
                                    onJoinChatRoom={handleJoinChatRoom}
                                    onLogout={logout}
                                />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/chat/:roomId"
                        element={
                            user ? (
                                <ChatRoomPage
                                    user={user}
                                    messages={messages}
                                    onSendMessage={handleSendMessage}
                                    onJoinChatRoom={handleJoinChatRoom}
                                    onLogout={logout}
                                />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route path="/mypage" element={user ? <MyPage user={user} onLogout={logout} /> : <Navigate to="/login" />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
