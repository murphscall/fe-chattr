"use client"

/**
 * 채팅방 페이지 컴포넌트 - Context 사용 버전
 */
import {useState, useEffect, useRef, useCallback, useMemo} from "react"
import {useParams, useNavigate, useLocation} from "react-router-dom"
import styled from "styled-components"

import { ArrowLeft, Send , Menu, Heart,LucideLogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useChat } from "../context/ChatContext"
import { useWebSocket } from "../hooks/useWebSocket"
import { formatTime } from "../utils/utils"
import Modal from "../components/Modal.jsx";

const ChatRoomPage = () => {
    const { roomId } = useParams()
    const {state} = useLocation()
    const room = state?.room
    const navigate = useNavigate()
    const { user } = useAuth()
    const { messages, sendMessage, joinChatRoom, chatMembers, fetchChatMembers , kickUser ,messageLike ,exitUser } = useChat()
    const { isConnected, sendMessage: sendWebSocketMessage } = useWebSocket(roomId)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [newMessage, setNewMessage] = useState("")
    const messagesEndRef = useRef(null)
    const [isMemberListOpen, setIsMemberListOpen] = useState(false)


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
    const handleShowMembers = (roomId) =>{
        console.log(roomId)
        setIsMemberListOpen(true)
        fetchChatMembers(roomId)
    }
    const handleCloseMembers = () => {
        setIsMemberListOpen(false)
    }
    const handleExitRoom = async (roomId) =>{
       try{
           await exitUser(roomId)
           navigate("/chats")
       }catch (err){
           console.error("채팅방 나가기 실패:", err)
           alert("채팅방 나가기 중 오류가 발생했습니다.")
       }
    }

    // 백 버튼 클릭 처리
    const handleBack = () => {
        navigate("/chats")
    }

    // 좋아요 토글 처리 - 이제 Context에서 직접 사용
    const toggleLike = async (msgId) => {
        try {
            await messageLike(roomId, msgId)
        } catch (err) {
            console.error("좋아요 토글 실패", err)
        }
    }

    /* ───── 추방 로직 ───── */
    const handleKick = async (userId) => {
       kickUser(roomId,userId)
    }

    const isRoomMaster = useMemo(() => {
        const me = chatMembers.find((m) => m.id === Number(user?.userId))
        return me?.role === "MASTER"
    }, [chatMembers, user])

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
                <RoomTitle>{room.name}</RoomTitle>
                <ConnectionStatus isConnected={isConnected}>{isConnected ? "실시간 연결됨" : "연결 중..."}</ConnectionStatus>
                <UsersMenu onClick={() => handleShowMembers(room.id)}>
                    <Menu size={30}/>
                </UsersMenu>
            </ChatHeader>

            {/* ───── 멤버 사이드바 ───── */}
            {isMemberListOpen && (
                <SidebarOverlay onClick={handleCloseMembers}>
                    <MemberSidebar onClick={(e) => e.stopPropagation()}>
                        <SidebarHeader>
                            <h3>대화 상대</h3>
                            <CloseButton onClick={handleCloseMembers}>×</CloseButton>
                        </SidebarHeader>

                        <SidebarBody>
                            {chatMembers.length === 0 ? (
                                <p>참여자가 없습니다.</p>
                            ) : (
                                chatMembers.map((member) => {
                                    const showKick =
                                        isRoomMaster &&

                                        member.id !== Number(user?.userId) &&
                                        member.role !== "MASTER"
                                    return (
                                        <MemberItem key={member.id}>
                                            <Avatar
                                                src={member.avatar || "/default-avatar.png"}
                                                alt={member.name}
                                            />
                                            <MemberInfo>
                                                <MemberName>{member.name}</MemberName>
                                                {member.role && <MemberRole>{member.role}</MemberRole>}
                                            </MemberInfo>

                                            {showKick && (
                                                <KickButton onClick={() => handleKick(member.id)}>
                                                    추방
                                                </KickButton>
                                            )}
                                        </MemberItem>
                                    )
                                })
                            )}
                        </SidebarBody>
                        <SidebarBottom>
                            <ExitButton onClick={() => setConfirmOpen(true)}>
                                <LucideLogOut size={20} />
                                채팅방 나가기
                            </ExitButton>
                        </SidebarBottom>
                    </MemberSidebar>
                </SidebarOverlay>
            )}

            <Modal
                isOpen={confirmOpen}
                title="정말 나가시겠습니까?"
                onConfirm={() => handleExitRoom(roomId)}
                onCancel={() => setConfirmOpen(false)}
            />

            <MessageList>
                {displayMessages.length > 0 ? (
                    displayMessages.map((m, idx) => {
                        /* ① 시스템 메시지면 NoticeLine으로 바로 렌더 */
                        if (m.type === "NOTICE_JOIN" || m.type === "NOTICE_LEAVE" || m.type === "NOTICE_KICK") {
                            return (
                                <NoticeLine key={m.id ?? idx}>
                                    {m.content}
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
                                        <HeartContent>
                                            <Heart size={18} fill={m.isLikedByMe ? "red" : "none"} onClick={() => toggleLike(m.id)} key={idx} stroke={m.isLikedByMe ? "red" : "gray"} />
                                            <HeartCount>{m.likeCount || 0}</HeartCount>
                                        </HeartContent>
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

const SidebarBottom = styled.div`
   padding: 12px 16px 12px 0;
    border-top: 1px solid #ddd;
`
const ExitButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px; /* ← 아이콘과 텍스트 사이 간격 */

    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #242424;
    background-color: #eeeeee;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e0e0e0;
    }
`

const HeartCount = styled.span`
   padding-left: 2px;
`

const HeartContent = styled.div`
    margin-top: 0.25rem;
    padding: 5px 10px 5px 10px;
    display: flex;
    justify-content: space-around;
    background-color: #f9f9f9;
    align-items: end;
    gap:0.25em;
    cursor : pointer;
    border-radius: 16px;
    font-size: 14px;
`

const KickButton = styled.button`
    margin-left:8px;
    padding:4px 8px;
    border:none;
    border-radius:4px;
    font-size:0.8rem;
    background:#e74c3c;
    color:#fff;
    cursor:pointer;
    &:hover{opacity:.85;}`


const MemberItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #dddddd;
  cursor: pointer;  
  padding: 8px 0;
    
    &:hover{
        background-color: #f0f0f0;
    }
`



const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const MemberName = styled.span`
  font-weight: bold;
`

const MemberRole = styled.span`
  font-size: 12px;
  color: gray;
    `

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`

const MemberSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`

const SidebarBody = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 20px;
`

// 참여자 메뉴
const UsersMenu= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
`;



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
  margin-top: 0.25rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textLight};
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