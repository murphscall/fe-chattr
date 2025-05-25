/**
 * WebSocket 연결 및 메시지 처리를 담당하는 서비스
 */
import { Client } from "@stomp/stompjs"
import SockJS from "sockjs-client"

/**
 * WebSocket 서비스 클래스
 * STOMP 프로토콜을 사용하여 WebSocket 연결 및 메시지 처리
 */
class WebSocketService {
  constructor() {
    this.client = null
    this.subscriptions = new Map()
    this.messageHandlers = new Map()
    this.connectionPromise = null
    this.currentUser = null
  }

  /**
   * WebSocket 연결 초기화
   * @param {Object} user 현재 사용자 정보
   * @returns {Promise<void>} 연결 완료 Promise
   */
  init(user) {
    this.currentUser = user

    if (this.connectionPromise) {
      return this.connectionPromise
    }

    this.connectionPromise = new Promise((resolve, reject) => {
      try {
        // STOMP 클라이언트 생성
        this.client = new Client({
          webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
          connectHeaders: {
            // HTTP-only 쿠키를 사용하므로 여기서는 추가 헤더가 필요 없음
          },
          debug: (str) => {
            console.log("STOMP: " + str)
          },
          reconnectDelay: 5000,
          heartbeatIncoming: 4000,
          heartbeatOutgoing: 4000,
        })

        // 연결 성공 시 콜백
        this.client.onConnect = () => {
          console.log("WebSocket 연결 성공")
          resolve()
        }

        // 연결 오류 시 콜백
        this.client.onStompError = (frame) => {
          console.error("STOMP 오류:", frame)
          reject(new Error("STOMP 연결 오류: " + frame.headers.message))
        }

        // WebSocket 연결 시작
        this.client.activate()
      } catch (error) {
        console.error("WebSocket 초기화 오류:", error)
        reject(error)
        this.connectionPromise = null
      }
    })

    return this.connectionPromise
  }

  /**
   * 채팅방 구독
   * @param {string} chatId 채팅방 ID
   * @param {Function} onMessageReceived 메시지 수신 콜백
   */
  subscribeToChatRoom(chatId, onMessageReceived) {
    if (!this.client || !this.client.connected) {
      console.error("WebSocket이 연결되지 않았습니다.")
      return
    }

    // 이미 구독 중인 경우 처리
    const subscriptionId = `/sub/chats/${chatId}`
    // 기존 구독 여부 검사
    if (this.subscriptions.has(subscriptionId)) {
      // ✅ 기존 핸들러 무조건 덮어쓰기 (중복 방지 핵심)
      this.messageHandlers.set(subscriptionId, [onMessageReceived]);
      return;
    }

    // 새로운 구독 생성
    try {
      const subscription = this.client.subscribe(subscriptionId, (message) => {
        console.log("web 소켓 수신" , message)
        this.handleIncomingMessage(chatId, message)
      })

      this.subscriptions.set(subscriptionId, subscription)
      this.messageHandlers.set(subscriptionId, [onMessageReceived])
      console.log(`채팅방 ${chatId} 구독 성공`)
    } catch (error) {
      console.error(`채팅방 ${chatId} 구독 오류:`, error)
    }
  }

  /**
   * 채팅방 구독 해제
   * @param {string} chatId 채팅방 ID
   */
  unsubscribeFromChatRoom(chatId) {
    const subscriptionId = `/sub/chats/${chatId}`
    const subscription = this.subscriptions.get(subscriptionId)

    if (subscription) {
      subscription.unsubscribe()
      this.subscriptions.delete(subscriptionId)
      this.messageHandlers.delete(subscriptionId)
      console.log(`채팅방 ${chatId} 구독 해제`)
    }
  }

  /**
   * 메시지 전송
   * @param {string} chatId 채팅방 ID
   * @param {string} content 메시지 내용
   */
  sendMessage(chatId, content) {
    if (!this.client || !this.client.connected) {
      console.error("WebSocket이 연결되지 않았습니다.")
      return
    }

    if (!this.currentUser) {
      console.error("사용자 정보가 없습니다.")
      return
    }

    const message = {
      chatId: Number.parseInt(chatId),
      senderId: Number.parseInt(this.currentUser.userId),
      senderName: this.currentUser.name,
      content,
      type: "TEXT",
      isDeleted: false,
      createdAt: new Date().toISOString(),
    }

    try {
      this.client.publish({
        destination: `/pub/api/chats/messages/send`,
        body: JSON.stringify(message),
      })
      console.log("메시지 전송 성공:", message)
    } catch (error) {
      console.error("메시지 전송 오류:", error)
    }
  }

  /**
   * 수신된 메시지 처리
   * @param {string} chatId 채팅방 ID
   * @param {Object} stompMessage STOMP 메시지
   */
  handleIncomingMessage(chatId, stompMessage) {
    try {
      const rawMessage = JSON.parse(stompMessage.body)

      // 백엔드 메시지 형식을 프론트엔드 형식으로 변환
      const message = {
        id: `${rawMessage.chatId}_${rawMessage.senderId}_${Date.now()}`, // 임시 ID 생성
        sender: {
          userId: rawMessage.senderId.toString(),
          name: rawMessage.senderName,
          email: "", // 백엔드에서 제공하지 않음
          phone: "", // 백엔드에서 제공하지 않음
          createdAt: "", // 백엔드에서 제공하지 않음
          avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${rawMessage.senderName}`, // 아바타 생성
        },
        content: rawMessage.content,
        timestamp: rawMessage.createdAt,
      }

      // 등록된 모든 핸들러에게 메시지 전달
      const subscriptionId = `/sub/chats/${chatId}`
      const handlers = this.messageHandlers.get(subscriptionId) || []
      handlers.forEach((handler) => handler(message))
    } catch (error) {
      console.error("메시지 처리 오류:", error)
    }
  }

  /**
   * 연결 종료
   */
  disconnect() {
    if (this.client) {
      // 모든 구독 해제
      this.subscriptions.forEach((subscription) => subscription.unsubscribe())
      this.subscriptions.clear()
      this.messageHandlers.clear()

      // 연결 종료
      this.client.deactivate()
      this.client = null
      this.connectionPromise = null
      console.log("WebSocket 연결 종료")
    }
  }

  /**
   * 연결 상태 확인
   * @returns {boolean} 연결 상태
   */
  isConnected() {
    return this.client !== null && this.client.connected
  }
}

// 싱글톤 인스턴스 생성
export const webSocketService = new WebSocketService()
