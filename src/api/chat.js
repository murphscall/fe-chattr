// 채팅 관련 API 호출을 중앙화하는 서비스 파일

import { mapBackendChatsToChatRooms, mapBackendChatToChatRoom } from "../mapper/chatMapper"
import api from "./CommonAxiosSet.js";

// 채팅방 목록 가져오기
export async function getChatRooms(){
    try {
        // 백엔드 API 호출
        const response = await api.get("/api/chats/list")

        const data = await response.data;

        if(data.status !== "success"){
            throw new Error("채팅방 목록을 가져오는데 실패했습니다")
        }

        console.log("백엔드에서 받은 채팅방 목록:", data)

        // 현재 사용자 정보 가져오기 (로컬 스토리지에서)

        // 백엔드 데이터를 프론트엔드 모델로 변환
        const chatRooms = mapBackendChatsToChatRooms(data.data.content)
        return chatRooms
    } catch (error) {
        console.error("채팅방 목록 조회 오류:", error)
        throw error
    }
}

export async function getMyChatRooms(){
   try{
       const response = await api.get("/api/chats/me")
       const data = response.data;

       if(data.status !== "success"){
           throw new Error("채팅방 목록을 가져오는데 실패했습니다")
       }
       const chatRooms = mapBackendChatsToChatRooms(data.data.content)
       return chatRooms
   }catch (error) {
       console.error("참여 중인 채팅방 목록 조회 실패" , error)
       throw error;
   }

}


// 채팅방 생성하기
export async function createChatRoom(title, topic, description) {
    // API 요청: 채팅방 생성
    console.log("채팅방 생성 요청 데이터:", { title, topic, description }) // 요청 데이터 로깅 추가

    const response = await fetch("http://localhost:8080/api/chats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 인증 토큰이 필요한 경우 추가
            // "Authorization": `Bearer ${token}`
        },
        credentials: "include", // 쿠키 포함
        body: JSON.stringify({
            title, // 제목 (필수)
            topic, // 주제 (필수) - 백엔드 enum 값 (GENERAL, STUDY 등)
            description: description || null, // 소개 (선택) - 빈 문자열 대신 null 또는 값 전달
        }),
    })

    if (!response.ok) {
    const errorData = await response.json()
    console.error("채팅방 생성 오류 응답:", errorData) // 오류 응답 로깅 추가
    throw new Error(errorData.message || "채팅방 생성에 실패했습니다")
}

const data = await response.json()
console.log("채팅방 생성 성공 응답:", data) // 성공 응답 로깅 추가

// 현재 사용자 정보 가져오기
let currentUser;
try {
    const userJson = localStorage.getItem("user")
    if (userJson) {
        currentUser = JSON.parse(userJson)
    }
} catch (error) {
    console.error("사용자 정보 파싱 오류:", error)
}

// API 응답 구조에 맞게 데이터 변환
if (data.status === "success") {
    // 백엔드 데이터를 프론트엔드 모델로 변환
    return mapBackendChatToChatRoom(data.data, currentUser)
} else {
    throw new Error("채팅방 생성에 실패했습니다")
}
}

// 채팅방 참여하기
export async function joinChatRoom(roomId){
    const response = await fetch(`http://localhost:8080/api/chats/${roomId}/join`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // 쿠키 포함
    })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "채팅방 참여에 실패했습니다")
    }

    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "채팅방 참여에 실패했습니다")
    }
}

// 채팅방 메시지 가져오기
export async function getChatRoomMessages(roomId) {
    const response = await fetch(`http://localhost:8080/api/chats/${roomId}/messages`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // 쿠키 포함
    })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "채팅방 메시지를 가져오는데 실패했습니다")
    }

    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "채팅방 메시지를 가져오는데 실패했습니다")
    }

    return data.data
}

// 메시지 전송하기
export async function sendMessage(roomId, content){
    const response = await fetch("http://localhost:8080/api/chats/messages/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // 쿠키 포함
        body: JSON.stringify({
            chatId: roomId,
            content,
        }),
    })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "메시지 전송에 실패했습니다")
    }

    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "메시지 전송에 실패했습니다")
    }

    return data.data
}
