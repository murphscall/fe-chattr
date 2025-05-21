import type { BackendChat, ChatRoom, User, Message } from "../types"

/**
 * 백엔드 Chat 엔티티를 프론트엔드 ChatRoom 모델로 변환하는 함수
 * 실제 API 응답 구조에 맞게 수정
 */
export function mapBackendChatToChatRoom(
    backendChat: BackendChat,
    currentUser?: User,
    lastMessage?: Message,
): ChatRoom {
    // API 응답에 참여자 목록이 없으므로 현재 사용자만 포함
    const participants: User[] = currentUser ? [currentUser] : []

    // API 응답에 topic이 없으므로 기본값 사용
    const category = "일반 대화" // 기본 카테고리

    return {
        id: backendChat.chatId.toString(),
        name: backendChat.title,
        description: backendChat.description || undefined,
        createdBy: currentUser?.userId || "unknown",
        participants,
        lastMessage,
        category,
        participantsCount: participants.length,
        isHot: false, // 참여자 수 정보가 없으므로 기본값 사용
    }
}

/**
 * 백엔드 Chat 엔티티 배열을 프론트엔드 ChatRoom 모델 배열로 변환하는 함수
 */
export function mapBackendChatsToChatRooms(
    backendChats: BackendChat[],
    currentUser?: User,
    messagesMap?: Record<string, Message[]>,
): ChatRoom[] {
    return backendChats.map((chat) => {
        const chatId = chat.chatId.toString()
        const messages = messagesMap?.[chatId] || []
        const lastMessage = messages.length > 0 ? messages[messages.length - 1] : undefined

        return mapBackendChatToChatRoom(chat, currentUser, lastMessage)
    })
}
