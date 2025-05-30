"use client"

/**
 * WebSocket 연결 관리를 위한 커스텀 훅
 */
import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useChat } from "../context/ChatContext"
import { webSocketService } from "../services/websocket"

/**
 * 특정 채팅방의 WebSocket 연결을 관리하는 훅
 */export const useWebSocket = (roomId) => {
    const { user } = useAuth()
    const { addMessage } = useChat()
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        if (!user || !roomId) {
            setIsConnected(false)
            return
        }

        const connectWebSocket = async () => {
            try {
                if (!webSocketService.isConnected()) {
                    await webSocketService.init(user)
                }

                // 채팅방 구독
                webSocketService.subscribeToChatRoom(roomId, (message) => {
                    addMessage(roomId, message)
                })

                // 개별 알림 구독 (추방 알림)
                webSocketService.subscribeToPersonalNotifications((notification) => {
                    console.log("=== 개별 알림 받음 ===", notification) // 추가
                    if (notification.chatId === parseInt(roomId)) {
                        console.log("현재 방의 추방 알림입니다") // 추가
                        alert(notification.message)
                        // 채팅방에서 나가기
                        webSocketService.handleKickOut(roomId)
                    }
                })



                setIsConnected(true)
            } catch (error) {
                console.error("WebSocket 연결 오류:", error)
                setIsConnected(false)
            }
        }

        connectWebSocket()

        return () => {
            if (roomId) {
                webSocketService.unsubscribeFromChatRoom(roomId)
                webSocketService.unsubscribeFromPersonalNotifications() // 추가
            }
        }
    }, [user, roomId])

    const sendWebSocketMessage = (content) => {
        if (isConnected && roomId) {
            webSocketService.sendMessage(roomId, content)
        }
    }

    return {
        isConnected,
        sendMessage: sendWebSocketMessage,
    }
}