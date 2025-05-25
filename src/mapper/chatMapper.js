import {TOPIC_TO_CATEGORY_MAP} from "./categoryMap.js";


/**
 * 백엔드 Chat 엔티티를 프론트엔드 ChatRoom 모델로 변환하는 함수
 * 실제 API 응답 구조에 맞게 수정
 */
export function mapBackendChatToChatRoom(
    Chat){
    // API 응답에 참여자 목록이 없으므로 현재 사용자만 포함

    return {
        id: Chat.chatId,
        name: Chat.title,
        description: Chat.description || undefined,
        participantsCount: Chat.memberCount, // ✅ 이걸 써야 함
        lastMessage: null, // 아직 없으므로 null 또는 임시 값
        category: TOPIC_TO_CATEGORY_MAP[Chat.topic], // topic이 없으므로 기본값 사용
        isHot: Chat.memberCount >= 5 // 예시: 5명 이상이면 핫
    }
}

/**
 * 백엔드 Chat 엔티티 배열을 프론트엔드 ChatRoom 모델 배열로 변환하는 함수
 */
export function mapBackendChatsToChatRooms(ChatList) {
    return ChatList.map((chat) => {
        return mapBackendChatToChatRoom(chat)
    })
}
