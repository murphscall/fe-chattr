// 채팅 관련 API 호출을 중앙화하는 서비스 파일

import type { ChatRoom, Message } from "../types"
import { get, post } from "./api"

// 채팅방 목록 가져오기
export async function getChatRooms(): Promise<ChatRoom[]> {
    return await get<ChatRoom[]>("/api/chat-rooms")
}

// 채팅방 생성하기
export async function createChatRoom(name: string, category: string): Promise<ChatRoom> {
    return await post<ChatRoom>("/api/chat-rooms", { name, category })
}

// 채팅방 참여하기
export async function joinChatRoom(roomId: string): Promise<void> {
    await post<void>(`/api/chat-rooms/${roomId}/join`, {})
}

// 채팅방 메시지 가져오기
export async function getChatRoomMessages(roomId: string): Promise<Message[]> {
    return await get<Message[]>(`/api/chat-rooms/${roomId}/messages`)
}

// 메시지 전송하기
export async function sendMessage(roomId: string, content: string): Promise<Message> {
    return await post<Message>("/api/messages", { roomId, content })
}
