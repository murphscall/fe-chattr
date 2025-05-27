"use client"

/**
 * 채팅 상태 관리를 위한 Context
 */
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react"
import { useAuth } from "./AuthContext"
import * as chatService from "../services/chat"
import { webSocketService } from "../services/websocket"

const ChatContext = createContext(null)

/**
 * 채팅 Context Provider
 */
export const ChatProvider = ({ children }) => {
    const { user } = useAuth()
    const [chatRooms, setChatRooms] = useState([])
    const [myChatRooms, setMyChatRooms] = useState([])
    const [hotChatRooms, setHotChatRooms] = useState([])
    const [messages, setMessages] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [pagination, setPagination] = useState({
        page: 0,
        size: 20,
        totalElements: 0,
        totalPages: 0,
        last: true,
    })


    /**
     * 모든 채팅방 목록 가져오기
     */
    const fetchChatRooms = useCallback(
        async (page = 0, size = 10) => {
            if(!user) return;


            try {
                setIsLoading(true)
                setError(null)
                const result = await chatService.getChatRooms(page, size)

                if (page === 0) {
                    setChatRooms(result.chatRooms)
                } else {
                    setChatRooms((prev) => [...prev, ...result.chatRooms])
                }

                setPagination(result.pagination)
            } catch (err) {
                setError("채팅방 목록을 가져오는데 실패했습니다.")
                console.error("채팅방 목록 조회 오류:", err)
            } finally {
                setIsLoading(false)
            }
        },
        [user],
    )


    const fetchHotChatRooms = useCallback(
        async (page = 0, size = 10) => {
            if(!user) return;

            try{
                setIsLoading(true)
                setError(null)
                const result = await chatService.getHotChatRooms(page, size)

                if (page === 0) {
                    setHotChatRooms(result.chatRooms)
                } else {
                    setHotChatRooms((prev) => [...prev, ...result.chatRooms])
                }
                setPagination(result.pagination)

            }catch (err){
                setError("내 채팅방 목록을 가져오는데 실패했습니다.")
                console.error("내 채팅방 목록 조회 오류:", err)
            }finally {
                setIsLoading(false)
            }
        }
    )

    /**
     * 내가 참여중인 채팅방 목록 가져오기
     */
    const fetchMyChatRooms = useCallback(
        async (page = 0, size = 10) => {
            if (!user) return

            try {
                setIsLoading(true)
                setError(null)
                const result = await chatService.getMyChatRooms(page, size)

                if (page === 0) {
                    setMyChatRooms(result.chatRooms)
                } else {
                    setMyChatRooms((prev) => [...prev, ...result.chatRooms])
                }

                setPagination(result.pagination)
            } catch (err) {
                setError("내 채팅방 목록을 가져오는데 실패했습니다.")
                console.error("내 채팅방 목록 조회 오류:", err)
            } finally {
                setIsLoading(false)
            }
        },
        [user],
    )

    /**
     * 채팅방 생성
     */
    const createChatRoom = useCallback(
        async (title, topic, description) => {
            if (!user) return

            try {
                setError(null)
                const createdRoom = await chatService.createChatRoom(title, topic, description)

                // 새로 생성된 채팅방을 목록에 추가
                setChatRooms((prev) => [createdRoom, ...prev])
                setMyChatRooms((prev) => [createdRoom, ...prev])

                return createdRoom.id
            } catch (err) {
                setError("채팅방 생성에 실패했습니다.")
                console.error("채팅방 생성 오류:", err)
                throw err
            }
        },
        [user],
    )

    /**
     * 채팅방 참여
     */
    const joinChatRoom = useCallback(
        async (roomId) => {
            if (!user) return

            try {
                setError(null)
                await chatService.joinChatRoom(roomId)

                // 채팅방 메시지 가져오기
                const messagesData = await chatService.getChatRoomMessages(roomId)
                setMessages((prev) => ({
                    ...prev,
                    [roomId]: messagesData,
                }))


            } catch (err) {
                setError("채팅방 참여에 실패했습니다.")
                console.error("채팅방 참여 오류:", err)

                // 오류 발생 시에도 UI 업데이트 (낙관적 UI)
                if (!messages[roomId]) {
                    setMessages((prev) => ({
                        ...prev,
                        [roomId]: [],
                    }))
                }
            }
        },
        [user],
    )

    /**
     * 메시지 전송
     */
    const sendMessage = useCallback(
        async (roomId, content, type = "CHAT") => {
            if (!user) return

            try {
                setError(null)
                const sentMessage = await chatService.sendMessage(roomId, content, type)

                // 메시지 목록 업데이트
                setMessages((prev) => ({
                    ...prev,
                    [roomId]: [...(prev[roomId] || []), sentMessage],
                }))

                // 채팅방의 마지막 메시지 업데이트
                const updateLastMessage = (rooms) =>
                    rooms.map((room) => {
                        if (room.id === roomId) {
                            return { ...room, lastMessage: sentMessage }
                        }
                        return room
                    })

                setChatRooms(updateLastMessage)
                setMyChatRooms(updateLastMessage)
            } catch (err) {
                setError("메시지 전송에 실패했습니다.")
                console.error("메시지 전송 오류:", err)

                // 오류 발생 시에도 UI 업데이트 (낙관적 UI)
                const newMessage = {
                    id: Date.now().toString(),
                    sender: user,
                    content,
                    timestamp: new Date().toISOString(),
                    type,
                    isDeleted: false,
                }

                setMessages((prev) => ({
                    ...prev,
                    [roomId]: [...(prev[roomId] || []), newMessage],
                }))
            }
        },
        [user],
    )

    /**
     * 실시간 메시지 수신 처리
     */
    const addMessage = useCallback((roomId, message) => {
        setMessages((prev) => ({
            ...prev,
            [roomId]: [...(prev[roomId] || []), message],
        }))

        // 채팅방의 마지막 메시지 업데이트
        const updateLastMessage = (rooms) =>
            rooms.map((room) => {
                if (room.id === roomId) {
                    return { ...room, lastMessage: message }
                }
                return room
            })

        setChatRooms(updateLastMessage)
        setMyChatRooms(updateLastMessage)
    }, [])

    // WebSocket 연결 관리
    useEffect(() => {
        if (!user) {
            webSocketService.disconnect()
            return
        }

        const initWebSocket = async () => {
            try {
                await webSocketService.init(user)
                console.log("WebSocket 초기화 완료")
            } catch (error) {
                console.error("WebSocket 초기화 오류:", error)
            }
        }

        initWebSocket()

        return () => {
            webSocketService.disconnect()
        }
    }, [user])

    const value = useMemo(
        () => ({
            chatRooms,
            myChatRooms,
            hotChatRooms,
            messages,
            isLoading,
            error,
            pagination,
            fetchChatRooms,
            fetchHotChatRooms,
            fetchMyChatRooms,
            createChatRoom,
            joinChatRoom,
            sendMessage,
            addMessage,
        }),
        [
            chatRooms,
            myChatRooms,
            hotChatRooms,
            messages,
            isLoading,
            error,
            pagination,
            fetchChatRooms,
            fetchHotChatRooms,
            fetchMyChatRooms,
            createChatRoom,
            joinChatRoom,
            sendMessage,
            addMessage,
        ],
    )

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

/**
 * 채팅 Context 사용 훅
 */
export const useChat = () => {
    const context = useContext(ChatContext)
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider")
    }
    return context
}
