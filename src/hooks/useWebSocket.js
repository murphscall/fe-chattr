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