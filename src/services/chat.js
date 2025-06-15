/**
 * 채팅 관련 API 호출을 처리하는 서비스
 */
import { TOPIC_TO_CATEGORY_MAP } from "../types"
import api from "./CommonAxiosSet.js";

/**
 * 채팅방 목록 가져오기
 * @param {number} page 페이지 번호 (기본값: 0)
 * @param {number} size 페이지 크기 (기본값: 20)
 * @returns {Promise<Object>} 채팅방 목록과 페이징 정보
 */
const API_URL = import.meta.env.VITE_API_BASE_URL;
export async function getChatRooms(page = 0, size = 10) {
    try {
        // 백엔드 API 호출 (페이징 파라미터 추가)
        const response = await api.get(`${API_URL}/api/chats/list?page=${page}&size=${size}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // 쿠키 포함
        })


        const data = response.data


        if (data.status !== "success") {
            throw new Error(data.message || "채팅방 목록을 가져오는데 실패했습니다")
        }

        // 백엔드 데이터를 프론트엔드 모델로 변환
        const chatRooms = data.data.content.map((chat) => ({
            id: chat.chatId.toString(),
            name: chat.title,
            description: chat.description || undefined,
            createdBy: "unknown", // 백엔드에서 제공하지 않음
            lastMessage: undefined, // 별도 API로 가져와야 함
            category: TOPIC_TO_CATEGORY_MAP[chat.topic] || "일반 대화",
            participantsCount: chat.memberCount,
            isHot: chat.memberCount >= 3, // 10명 이상이면 핫한 채팅방
            createdAt: chat.createdAt,
        }))

        return {
            chatRooms,
            pagination: {
                page: data.data.page,
                size: data.data.size,
                totalElements: data.data.totalElements,
                totalPages: data.data.totalPages,
                last: data.data.last,
            },
        }
    } catch (error) {
        console.error("채팅방 목록 조회 오류:", error)
        throw error
    }
}

export async function getCreateByMeChatRooms() {

    try{
        const response = await api.get(`${API_URL}/api/chats/my`)
        const data = response.data;

        if (data.status !== "success") {
            throw new Error(data.message || "내 채팅방 목록을 가져오는데 실패했습니다")
        }
        // 백엔드 데이터를 프론트엔드 모델로 변환
        const chatRooms = data.data.map((chat) => ({
            id: chat.chatId.toString(),
            name: chat.title,
            description: chat.description || undefined,
            createdBy: "unknown",
            lastMessage: undefined,
            category: TOPIC_TO_CATEGORY_MAP[chat.topic] || "일반 대화",
            participantsCount: chat.memberCount,
            isHot: chat.memberCount >= 3,
            createdAt: chat.createdAt,
        }))

        return chatRooms
    }catch (error) {

        return []
    }
}

export async function getHotChatRooms(page = 0, size = 10) {
    try{
        const response = await api.get(`${API_URL}/api/chats/hot?page=${page}&size=${size}`, {})
        const data = response.data;

        if (data.status !== "success") {
            throw new Error(data.message || "내 채팅방 목록을 가져오는데 실패했습니다")
        }
        // 백엔드 데이터를 프론트엔드 모델로 변환
        const chatRooms = data.data.content.map((chat) => ({
            id: chat.chatId.toString(),
            name: chat.title,
            description: chat.description || undefined,
            createdBy: "unknown",
            lastMessage: undefined,
            category: TOPIC_TO_CATEGORY_MAP[chat.topic] || "일반 대화",
            participantsCount: chat.memberCount,
            isHot: chat.memberCount >= 3,
            createdAt: chat.createdAt,
        }))

        return {
            chatRooms,
            pagination: {
                page: data.data.page,
                size: data.data.size,
                totalElements: data.data.totalElements,
                totalPages: data.data.totalPages,
                last: data.data.last,
            },
        }
    }catch (error) {

    }
}

/**
 * 내가 참여중인 채팅방 목록 가져오기
 * @param {number} page 페이지 번호 (기본값: 0)
 * @param {number} size 페이지 크기 (기본값: 10)
 * @returns {Promise<Object>} 내 채팅방 목록과 페이징 정보
 */
export async function getMyChatRooms(page = 0, size = 10) {
    try {
        const response = await api.get(`${API_URL}/api/chats/me?page=${page}&size=${size}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // 쿠키 포함
        })

        const data = response.data

        if (data.status !== "success") {
            throw new Error(data.message || "내 채팅방 목록을 가져오는데 실패했습니다")
        }


        // 현재 사용자 정보 가져오기
        let currentUser
        try {
            const userJson = localStorage.getItem("user")
            if (userJson) {
                currentUser = JSON.parse(userJson)
            }
        } catch (error) {
            console.error("사용자 정보 파싱 오류:", error)
        }

        // 백엔드 데이터를 프론트엔드 모델로 변환
        const chatRooms = data.data.content.map((chat) => ({
            id: chat.chatId.toString(),
            name: chat.title,
            description: chat.description || undefined,
            createdBy: "unknown",
            participants: currentUser ? [currentUser] : [],
            lastMessage: undefined,
            category: TOPIC_TO_CATEGORY_MAP[chat.topic] || "일반 대화",
            participantsCount: chat.memberCount,
            isHot: chat.memberCount >= 3,
            createdAt: chat.createdAt,
        }))

        return {
            chatRooms,
            pagination: {
                page: data.data.page,
                size: data.data.size,
                totalElements: data.data.totalElements,
                totalPages: data.data.totalPages,
                last: data.data.last,
            },
        }
    } catch (error) {
        console.error("내 채팅방 목록 조회 오류:", error)
        throw error
    }
}

/**
 * 채팅방 생성하기
 * @param {string} title 채팅방 제목
 * @param {string} topic 채팅방 주제 (ChatTopic enum 값)
 * @param {string} description 채팅방 설명 (선택적)
 * @returns {Promise<Object>} 생성된 채팅방 정보
 */
export async function createChatRoom(title, topic, description) {


    const response = await api.post(`${API_URL}/api/chats`,
        {
    title,topic,description : description || null,
        }
    )
    const data = response.data


    if (data.status !== "success") {
        throw new Error(data.data || "채팅방 생성에 실패했습니다")
    }


    // 백엔드 데이터를 프론트엔드 모델로 변환
    const createdRoom = {
        id: data.data.chatId.toString(),
        name: data.data.title,
        description: data.data.description || undefined,
        lastMessage: undefined,
        category: TOPIC_TO_CATEGORY_MAP[data.data.topic] || "일반 대화",
        participantsCount: data.data.memberCount || 1,
        isHot: false,
        createdAt: data.data.createdAt,
    }

    return createdRoom
}

/**
 * 채팅방 참여하기
 * @param {string} roomId 채팅방 ID
 */
export async function joinChatRoom(roomId) {
    const response = await api.post(`${API_URL}/api/chats/${roomId}/join`)

    const data = response.data

    if (data.status !== "success") {
        throw new Error(data.message || "채팅방 참여에 실패했습니다")
    }
}


export async function getChatRoomMembers(roomId) {
    const response = await api.get(`${API_URL}/api/chats/${roomId}/members`)
    const data = response.data
    if (data.status !== "success") {
        throw new Error(data.message || "채팅방 유저 목록 불러오기에 실패했습니다." )
    }


    const members = data.data.map(member => ({
        id: member.userId,
        name: member.name,
        role: member.role,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`,
    }))
    return members;
}

export async function exitChatRoom(roomId) {
    const response = await api.post(`${API_URL}/api/chats/${roomId}/exit`)
    const data = response.data;

    if(data.status !== "success"){
        throw new Error(data.message || "채팅방 나가기에 실패하였습니다.")
    }
}

/**
 * 채팅방 메시지 가져오기
 * @param {string} roomId 채팅방 ID
 * @param {number} page 페이지 번호 (기본값: 0)
 * @param {number} size 페이지 크기 (기본값: 50)
 * @returns {Promise<Array>} 메시지 목록
 */
export async function getChatRoomMessages(roomId) {
    // baseURL이 api 인스턴스에 설정돼 있다면 절대 URL 필요 없음
    const response = await api.get(`/api/chats/${roomId}/message`);
    const data = response.data;

    if (data.status !== 'success') {
        throw new Error(data.message || '채팅방 메시지를 가져오는데 실패했습니다');
    }

    // ── 변환 ─────────────────────────────────────────────────────────
    return data.data.map((msg) => {
        const isSystem = msg.senderId === null || (msg.type || '').startsWith('NOTICE');

        return {
            id: String(msg.id),

            sender: isSystem
                ? {
                    userId: null,
                    name: 'SYSTEM',
                    avatar: null,
                }
                : {
                    userId: String(msg.senderId),
                    name: msg.senderName,
                    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${msg.senderName}`,
                },

            content: msg.content,
            timestamp: msg.createdAt,
            type: msg.type,                   // TEXT, NOTICE_JOIN, …
            isDeleted: msg.deleted ?? msg.isDeleted,
            isLikedByMe: msg.likedByMe ?? false,
            likeCount : msg.likeCount,
        };
    });
}

export async function kickUser(roomId, userId) {
    const response = await api.post(`${API_URL}/api/chats/${roomId}/users/${userId}/kick `)
    if(response.status !== 204){
        throw new Error("추방 실패")
    }
}

/**
 * 메시지 전송하기
 * @param {string} roomId 채팅방 ID
 * @param {string} content 메시지 내용
 * @param {string} type 메시지 타입 (기본값: "CHAT")
 * @returns {Promise<Object>} 전송된 메시지 정보
 */
export async function sendMessage(roomId, content, type = "TEXT") {
    const response = await api.post(`${API_URL}/api/messages`, {
            chatId: Number.parseInt(roomId),
            content,
            type,
    })

    if (!response.ok) {
        const errorData = response.message
        throw new Error(errorData.message || "메시지 전송에 실패했습니다")
    }

    const data = response.data

    if (data.status !== "success") {
        throw new Error(data.message || "메시지 전송에 실패했습니다")
    }

    // 백엔드 메시지 형식을 프론트엔드 형식으로 변환
    const message = {
        id: data.data.id.toString(),
        sender: {
            userId: data.data.senderId.toString(),
            name: data.data.senderName,
            email: "",
            phone: "",
            createdAt: "",
            avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${data.data.senderName}`,
        },
        content: data.data.content,
        timestamp: data.data.createdAt,
        type: data.data.type,
        isDeleted: data.data.isDeleted,
    }

    return message
}

export async function messageLike(roomId , msgId){
    const response = await api.post(`${API_URL}/api/chats/${roomId}/msg/${msgId}/likes`)
    const data = response.data
    if (data.status !== "success") {
        throw new Error(data.message || "메시지 전송에 실패했습니다")
    }
}
