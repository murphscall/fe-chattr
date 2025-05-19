"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import type { User, Message } from "../types"
import { ArrowLeft, Send } from "lucide-react"
import { formatTime } from "../utils"

interface ChatRoomPageProps {
  user: User
  messages: Record<string, Message[]>
  onSendMessage: (roomId: string, content: string) => void
  onJoinChatRoom: (roomId: string) => void
  onLogout: () => void
}

const ChatRoomPage = ({ user, messages, onSendMessage, onJoinChatRoom }: ChatRoomPageProps) => {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const roomMessages = roomId && messages[roomId] ? messages[roomId] : []

  useEffect(() => {
    if (roomId) {
      onJoinChatRoom(roomId)
    }
  }, [roomId, onJoinChatRoom])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [roomMessages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (roomId && newMessage.trim()) {
      onSendMessage(roomId, newMessage.trim())
      setNewMessage("")
    }
  }

  if (!roomId) {
    return <div>잘못된 접근입니다.</div>
  }

  return (
    <Container>
      <ChatHeader>
        <BackButton onClick={() => navigate("/chats")}>
          <ArrowLeft size={20} />
        </BackButton>
        <RoomTitle>채팅방</RoomTitle>
      </ChatHeader>

      <MessageList>
        {roomMessages.length > 0 ? (
          roomMessages.map((message) => {
            const isOwnMessage = message.sender.userId === user.userId
            return (
              <MessageItem key={message.id} isOwnMessage={isOwnMessage}>
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

interface MessageItemProps {
  isOwnMessage: boolean
}

const MessageItem = styled.div<MessageItemProps>`
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

const MessageContent = styled.div<MessageItemProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isOwnMessage }) => (isOwnMessage ? "flex-end" : "flex-start")};
`

const SenderName = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.25rem;
`

const MessageBubble = styled.div<MessageItemProps>`
  padding: 0.75rem 1rem;
  border-radius: 16px;
  background-color: ${({ theme, isOwnMessage }) => (isOwnMessage ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, isOwnMessage }) => (isOwnMessage ? "white" : theme.colors.text)};
  max-width: 100%;
  word-break: break-word;
  box-shadow: ${({ theme }) => theme.shadows.small};
`

const MessageTime = styled.span<MessageItemProps>`
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
