"use client"

/**
 * 채팅방 목록 페이지 컴포넌트 - 백엔드 DTO에 맞게 수정
 */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CATEGORY_TO_TOPIC_MAP, CATEGORIES } from "../types"
import { useAuth } from "../context/AuthContext"
import { useChat } from "../context/ChatContext"
import Header from "../components/Header"
import { Plus, Search, Users, Zap, MessageSquare, X, Hash, Loader } from "lucide-react"
import { formatTime } from "../utils/utils"
import LoadingSpinner from "../components/LoadingSpinner"

const ChatListPage = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const {
        chatRooms,
        myChatRooms,
        isLoading,
        createChatRoom,
        joinChatRoom,
        error,
        fetchChatRooms,
        fetchMyChatRooms,
        pagination,
    } = useChat()

    const [searchTerm, setSearchTerm] = useState("")
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [newRoomName, setNewRoomName] = useState("")
    const [newRoomDescription, setNewRoomDescription] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("일반 대화")
    const [activeTab, setActiveTab] = useState("my")
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("전체")
    const [isCreatingRoom, setIsCreatingRoom] = useState(false)

    // 탭 변경 시 해당 데이터 새로고침
    useEffect(() => {
        if (activeTab === "my") {
            if(myChatRooms.length === 0){
                fetchMyChatRooms(0, 10)
            }
        } else {
            if(chatRooms.length === 0){
                fetchChatRooms(0, 10)
            }
        }
    }, [activeTab])

    // 현재 탭에 따른 채팅방 목록 선택
    const currentRooms = activeTab === "my" ? myChatRooms : chatRooms

    // 검색 및 필터링된 채팅방 목록
    const filteredRooms = currentRooms.filter(
        (room) =>

            room.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategoryFilter === "전체" || room.category === selectedCategoryFilter)

    )

    // 핫한 채팅방 필터링 (activeTab이 "hot"일 때)
    const displayRooms = activeTab === "hot" ? filteredRooms.filter((room) => room.isHot) : filteredRooms

    // 채팅방 클릭 처리
    const handleRoomClick = async (roomId) => {
        await joinChatRoom(roomId)
        navigate(`/chat/${roomId}`)
    }

    // 채팅방 생성 처리
    const handleCreateRoom = async () => {
        if (!newRoomName.trim()) return

        try {
            setIsCreatingRoom(true)

            // 한글 카테고리를 백엔드 enum 값으로 변환
            const topicValue = CATEGORY_TO_TOPIC_MAP[selectedCategory]
            const descriptionValue = newRoomDescription.trim() || null

            await createChatRoom(newRoomName.trim(), topicValue, descriptionValue)

            setNewRoomName("")
            setNewRoomDescription("")
            setSelectedCategory("일반 대화")
            setShowCreateModal(false)
        } catch (error) {
            console.error("채팅방 생성 중 오류 발생:", error)
            alert("채팅방 생성에 실패했습니다. 다시 시도해주세요.")
        } finally {
            setIsCreatingRoom(false)
        }
    }

    // 더 많은 채팅방 로드 (무한 스크롤)
    const loadMoreRooms = () => {
        if (!pagination.last && !isLoading) {
            if (activeTab === "my") {
                fetchMyChatRooms(pagination.page + 1, pagination.size)
            } else {
                fetchChatRooms(pagination.page + 1, pagination.size)
            }
        }
    }

    return (
        <Container>
            <Header user={user} logout={logout} />
            <Content>
                <PageHeader>
                    <PageTitle>채팅 목록</PageTitle>
                    <TabsContainer>
                        <Tab isActive={activeTab === "my"} onClick={() => setActiveTab("my")}>
                            <Users size={16} />내 채팅방 ({myChatRooms.length})
                        </Tab>
                        <Tab isActive={activeTab === "hot"} onClick={() => setActiveTab("hot")}>
                            <Zap size={16} />
                            핫한 채팅
                        </Tab>
                        <Tab isActive={activeTab === "all"} onClick={() => setActiveTab("all")}>
                            <MessageSquare size={16} />
                            전체 채팅 ({chatRooms.length})
                        </Tab>
                    </TabsContainer>
                </PageHeader>

                <SearchAndFilterContainer>
                    <SearchContainer>
                        <SearchIcon>
                            <Search size={18} />
                        </SearchIcon>
                        <SearchInput
                            type="text"
                            placeholder="채팅방 검색..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <ClearButton onClick={() => setSearchTerm("")}>
                                <X size={16} />
                            </ClearButton>
                        )}
                    </SearchContainer>

                    <CategoryFilter>
                        <CategoryFilterLabel>주제:</CategoryFilterLabel>
                        <CategorySelect value={selectedCategoryFilter} onChange={(e) => setSelectedCategoryFilter(e.target.value)}>
                            <option value="전체">전체</option>
                            {CATEGORIES.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </CategorySelect>
                    </CategoryFilter>
                </SearchAndFilterContainer>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                {isLoading && displayRooms.length === 0 ? (
                    <LoadingContainer>
                        <LoadingSpinner size={40} />
                        <LoadingText>채팅방 목록을 불러오는 중...</LoadingText>
                    </LoadingContainer>
                ) : displayRooms.length > 0 ? (
                    <>
                        <RoomList>
                            {displayRooms.map((room) => (
                                <RoomItem key={room.id} onClick={() => handleRoomClick(room.id)}>
                                    <RoomInfo>
                                        <RoomNameContainer>
                                            <RoomName>{room.name}</RoomName>
                                            {room.isHot && (
                                                <HotBadge>
                                                    <Zap size={12} /> 인기
                                                </HotBadge>
                                            )}
                                        </RoomNameContainer>
                                        <RoomDetails>
                                            <CategoryBadge>
                                                <Hash size={12} />
                                                {room.category}
                                            </CategoryBadge>
                                            <ParticipantsCount>
                                                <Users size={12} />
                                                {room.participantsCount}명 참여 중
                                            </ParticipantsCount>
                                        </RoomDetails>
                                        {room.description && <RoomDescription>{room.description}</RoomDescription>}
                                        {room.lastMessage && <LastMessage>{room.lastMessage.content}</LastMessage>}
                                    </RoomInfo>
                                    {room.lastMessage && <TimeStamp>{formatTime(room.lastMessage.timestamp)}</TimeStamp>}
                                </RoomItem>
                            ))}
                        </RoomList>

                        {/* 더 보기 버튼 또는 로딩 표시 */}
                        {!pagination.last && (
                            <LoadMoreContainer>
                                {isLoading ? (
                                    <LoadingSpinner size={30} />
                                ) : (
                                    <LoadMoreButton onClick={loadMoreRooms}>더 많은 채팅방 보기</LoadMoreButton>
                                )}
                            </LoadMoreContainer>
                        )}
                    </>
                ) : (
                    <EmptyState>
                        {searchTerm
                            ? "검색 결과가 없습니다."
                            : activeTab === "my"
                                ? "참여 중인 채팅방이 없습니다."
                                : activeTab === "hot"
                                    ? "현재 인기 채팅방이 없습니다."
                                    : "채팅방이 없습니다."}
                    </EmptyState>
                )}

                <CreateButton onClick={() => setShowCreateModal(true)}>
                    <Plus size={24} />
                </CreateButton>
            </Content>

            {showCreateModal && (
                <ModalOverlay>
                    <Modal>
                        <ModalTitle>새 채팅방 만들기</ModalTitle>

                        <ModalInputGroup>
                            <ModalLabel>채팅방 이름</ModalLabel>
                            <ModalInput
                                type="text"
                                placeholder="채팅방 이름"
                                value={newRoomName}
                                onChange={(e) => setNewRoomName(e.target.value)}
                                autoFocus
                                maxLength={50}
                            />
                            {newRoomName.length > 0 && (
                                <CharacterCount isLimit={newRoomName.length >= 50}>{newRoomName.length}/50</CharacterCount>
                            )}
                        </ModalInputGroup>

                        <ModalInputGroup>
                            <ModalLabel>채팅방 소개</ModalLabel>
                            <ModalTextarea
                                placeholder="채팅방에 대한 소개를 입력하세요 (선택사항)"
                                value={newRoomDescription}
                                onChange={(e) => setNewRoomDescription(e.target.value)}
                                rows={3}
                            />
                        </ModalInputGroup>

                        <ModalInputGroup>
                            <ModalLabel>주제 선택</ModalLabel>
                            <CategoryGrid>
                                {CATEGORIES.map((category) => (
                                    <CategoryOption
                                        key={category}
                                        isSelected={selectedCategory === category}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </CategoryOption>
                                ))}
                            </CategoryGrid>
                        </ModalInputGroup>

                        <ModalButtons>
                            <CancelButton onClick={() => setShowCreateModal(false)} disabled={isCreatingRoom}>
                                취소
                            </CancelButton>
                            <CreateRoomButton onClick={handleCreateRoom} disabled={!newRoomName.trim() || isCreatingRoom}>
                                {isCreatingRoom ? (
                                    <>
                                        <Loader size={16} className="animate-spin" />
                                        생성 중...
                                    </>
                                ) : (
                                    "만들기"
                                )}
                            </CreateRoomButton>
                        </ModalButtons>
                    </Modal>
                </ModalOverlay>
            )}
        </Container>
    )
}

// 기존 스타일 컴포넌트들 + 새로운 스타일 추가
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding-top: 1.5rem;
`

const PageHeader = styled.div`
  margin-bottom: 1.5rem;
`

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1.5rem;
`

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  color: ${({ isActive, theme }) => (isActive ? "#4285f4" : theme.colors.textLight)};
  border-bottom: 2px solid ${({ isActive }) => (isActive ? "#4285f4" : "transparent")};
  transition: all 0.2s;
  
  &:hover {
    color: ${({ isActive, theme }) => (isActive ? "#4285f4" : theme.colors.text)};
  }
`

const SearchAndFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
`

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`

const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CategoryFilterLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  white-space: nowrap;
`

const CategorySelect = styled.select`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const ErrorMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fee2e2;
  border-radius: 8px;
  color: #ef4444;
  text-align: center;
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  gap: 1rem;
`

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
`

const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const RoomItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const RoomInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const RoomNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`

const RoomName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const HotBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: #ef4444;
  color: white;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
`

const RoomDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`

const CategoryBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: #f3f4f6;
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 12px;
  font-size: 0.75rem;
`

const ParticipantsCount = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const RoomDescription = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const LastMessage = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
`

const TimeStamp = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: 1rem;
  white-space: nowrap;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: ${({ theme }) => theme.colors.textLight};
`

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

const LoadMoreButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4285f4;
  color: white;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #3367d6;
  }
`

const CreateButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #4285f4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(66, 133, 244, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: #3367d6;
    box-shadow: 0 6px 20px rgba(66, 133, 244, 0.4);
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const Modal = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.large};
`

const ModalTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const ModalInputGroup = styled.div`
  margin-bottom: 1.5rem;
`

const ModalLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const ModalInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
  }
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const CategoryOption = styled.div`
  padding: 0.75rem 0.5rem;
  text-align: center;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({ isSelected }) => (isSelected ? "#4285f4" : "#f3f4f6")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#4b5563")};
  
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#3367d6" : "#e5e7eb")};
  }
`

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`

const CancelButton = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.border};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const CreateRoomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: #4285f4;
  color: white;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: #3367d6;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
  }
`

const CharacterCount = styled.div`
  text-align: right;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  color: ${({ isLimit }) => (isLimit ? "#ef4444" : "#9ca3af")};
`

export default ChatListPage
