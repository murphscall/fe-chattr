"use client"

/**
 * 채팅방 페이지 컴포넌트
 */
import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ArrowLeft, Send } from "lucide-react"
import { formatTime } from "../utils.js"
import { webSocketService } from "../api/websocket"
import {useAuth} from "../context/AuthContext.jsx";

/**
 * 채팅방 페이지 컴포넌트
 * 메시지 목록 표시 및 메시지 송수신 처리
 */
const ChatRoomPage = ({onSendMessage, onJoinChatRoom }) => {
    const { roomId } = useParams()
    let { user , logout } = useAuth()
    const navigate = useNavigate()
    const [newMessage, setNewMessage] = useState("")
    const [localMessages, setLocalMessages] = useState([])
    const messagesEndRef = useRef(null)
    const [isConnected, setIsConnected] = useState(false)

    // 채팅방 ID가 유효한지 확인
    const validRoomId = roomId || ""

    // 초기 메시지 로드 및 WebSocket 연결
    useEffect(() => {
        if (!validRoomId) return

        // 채팅방 참여 및 메시지 로드
        onJoinChatRoom(validRoomId)


        // WebSocket 연결
        const connectWebSocket = async () => {
            try {
                // WebSocket 초기화
                await webSocketService.init(user)

                console.log("구독시도 경로 /sub/chats/" + validRoomId);
                // 채팅방 구독
                webSocketService.subscribeToChatRoom(validRoomId, (message) => {
                    console.log("받은메시지 " + message)
                    setLocalMessages((prev) => [...prev, message])
                })

                setIsConnected(true)
            } catch (error) {
                console.error("WebSocket 연결 오류:", error)
                setIsConnected(false)
            }
        }

        connectWebSocket()

        // 컴포넌트 언마운트 시 구독 해제
        return () => {
            webSocketService.unsubscribeFromChatRoom(validRoomId)
        }
    }, [validRoomId, user, onJoinChatRoom])

    // 메시지 목록이 변경될 때 스크롤 아래로 이동
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [localMessages])

    // 메시지 전송 처리
    const handleSend = (e) => {
        e.preventDefault()
        if (!validRoomId || !newMessage.trim()) return

        if (isConnected) {
            // WebSocket을 통해 메시지 전송
            webSocketService.sendMessage(validRoomId, newMessage.trim())
        } else {
            // 폴백: HTTP API를 통해 메시지 전송
            onSendMessage(validRoomId, newMessage.trim())
        }

        setNewMessage("")
    }

    // 백 버튼 클릭 처리
    const handleBack = () => {
        navigate("/chats")
    }

    if (!validRoomId) {
        return <div>잘못된 접근입니다.</div>
    }

    // 표시할 메시지 목록 (로컬 상태 우선, 없으면 props에서 가져옴)
    const displayMessages = localMessages.length > 0 ? localMessages : []

    return (
        <Container>
            <ChatHeader>
                <BackButton onClick={handleBack}>
                    <ArrowLeft size={20} />
                </BackButton>
                <RoomTitle>채팅방</RoomTitle>
                <ConnectionStatus isConnected={isConnected}>{isConnected ? "실시간 연결됨" : "연결 중..."}</ConnectionStatus>
            </ChatHeader>

            <MessageList>
                {displayMessages.length > 0 ? (
                    displayMessages.map((message, index) => {
                     const isOwnMessage = String(message.sender.userId) === String(user.userId)

                        return (
                            <MessageItem key={message.id || index} isOwnMessage={isOwnMessage}>
                                {!isOwnMessage && <Avatar src={message.sender.avatar} alt={message.sender.name} />}
                                <MessageContent isOwnMessage={isOwnMessage}>
                                    {!isOwnMessage && <SenderName>{message.sender.name}</SenderName>}
                                    <MessageBubble isOwnMessage={isOwnMessage}>{message.content}</MessageBubble>
                                    <MessageTime isOwnMessage={isOwnMessage}>{formatTime(message.timestamp)}</MessageTime>
                                </MessageContent>
                            </MessageItem>
                        )
                    })
                ) : (
                    <EmptyMessages>
                        <p>아직 메시지가 없습니다.</p>
                        <p>첫 메시지를 보내보세요!</p>
                    </EmptyMessages>
                )}
                <div ref={messagesEndRef} />
            </MessageList>

            <MessageForm onSubmit={handleSend}>
                <MessageInput
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                />
                <SendButton type="submit" disabled={!newMessage.trim()}>
                    <Send size={20} />
                </SendButton>
            </MessageForm>
        </Container>
    )
}

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ChatHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.small};
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`

const RoomTitle = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`

const ConnectionStatus = styled.div`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background-color: ${({ isConnected }) => (isConnected ? "#10b981" : "#f59e0b")};
  color: white;
`

const MessageList = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const MessageItem = styled.div`
  display: flex;
  flex-direction: ${({ isOwnMessage }) => (isOwnMessage ? "row-reverse" : "row")};
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 80%;
  align-self: ${({ isOwnMessage }) => (isOwnMessage ? "flex-end" : "flex-start")};
`

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isOwnMessage }) => (isOwnMessage ? "flex-end" : "flex-start")};
`

const SenderName = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.25rem;
`

const MessageBubble = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 16px;
  background-color: ${({ theme, isOwnMessage }) => (isOwnMessage ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, isOwnMessage }) => (isOwnMessage ? "white" : theme.colors.text)};
  max-width: 100%;
  word-break: break-word;
  box-shadow: ${({ theme }) => theme.shadows.small};
`

const MessageTime = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 0.25rem;
  align-self: ${({ isOwnMessage }) => (isOwnMessage ? "flex-end" : "flex-start")};
`

const EmptyMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  gap: 0.5rem;
`

const MessageForm = styled.form`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  font-size: 1rem;
  margin-right: 0.75rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default ChatRoomPage
