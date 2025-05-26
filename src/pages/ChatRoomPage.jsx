"use client"

/**
 * 채팅방 페이지 컴포넌트 - Context 사용 버전
 */
import { useState, useEffect, useRef, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ArrowLeft, Send } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useChat } from "../context/ChatContext"
import { useWebSocket } from "../hooks/useWebSocket"
import { formatTime } from "../utils/utils"

const ChatRoomPage = () => {
    const { roomId } = useParams()
    const navigate = useNavigate()
    const { user } = useAuth()
    const { messages, sendMessage, joinChatRoom } = useChat()
    const { isConnected, sendMessage: sendWebSocketMessage } = useWebSocket(roomId)

    const [newMessage, setNewMessage] = useState("")
    const messagesEndRef = useRef(null)

    // 채팅방 ID가 유효한지 확인
    const validRoomId = roomId || ""

    // joinChatRoom을 useCallback으로 메모이제이션
    const memoizedJoinChatRoom = useCallback(
        (roomId) => {
            if (roomId && user) {
                joinChatRoom(roomId)
            }
        },
        [user, joinChatRoom], // joinChatRoom 함수 자체는 제외
    )

    // 초기 채팅방 참여
    useEffect(() => {
        if (validRoomId && user) {
            memoizedJoinChatRoom(validRoomId)
        }
    }, [validRoomId, user, memoizedJoinChatRoom])

    // 메시지 목록이 변경될 때 스크롤 아래로 이동
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages[validRoomId]])

    // 메시지 전송 처리
    const handleSend = (e) => {
        e.preventDefault()
        if (!validRoomId || !newMessage.trim()) return

        if (isConnected) {
            // WebSocket을 통해 메시지 전송
            sendWebSocketMessage(newMessage.trim())
        } else {
            // 폴백: HTTP API를 통해 메시지 전송
            sendMessage(validRoomId, newMessage.trim())
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

    // 표시할 메시지 목록
    const displayMessages = messages[validRoomId] || []

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
                    displayMessages.map((m, idx) => {
                        /* ① 시스템 메시지면 NoticeLine으로 바로 렌더 */
                        if (m.type === "NOTICE_JOIN" || m.type === "NOTICE_LEAVE") {
                            return (
                                <NoticeLine key={m.id ?? idx}>
                                    {m.content /* “김진후 님이 입장했습니다!” */}
                                </NoticeLine>
                            )
                        }

                        /* ② 일반 채팅 버블은 기존 로직 재사용 */
                        const isOwn = m.sender.userId === user?.userId
                        return (
                            <MessageItem key={m.id ?? idx} isOwnMessage={isOwn}>
                                {!isOwn && <Avatar src={m.sender.avatar} alt={m.sender.name} />}
                                <MessageContent isOwnMessage={isOwn}>
                                    {!isOwn && <SenderName>{m.sender.name}</SenderName>}
                                    <MessageBubble isOwnMessage={isOwn}>{m.content}</MessageBubble>
                                    <MessageTime isOwnMessage={isOwn}>
                                        {formatTime(m.timestamp)}
                                    </MessageTime>
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

// 시스템용 회색 가로 라인
const NoticeLine = styled.div`
  width: 100%;
  margin: 8px 0;
  text-align: center;
  font-size: 12px;
  color: #9ca3af;   /* tailwind gray-400 정도 */
`;
// 스타일 컴포넌트는 기존과 동일
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
