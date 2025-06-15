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
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      try {
        // STOMP 클라이언트 생성
        this.client = new Client({
          webSocketFactory: () => new SockJS(`${API_URL}/ws`),
          connectHeaders: {
            // HTTP-only 쿠키를 사용하므로 여기서는 추가 헤더가 필요 없음
          },
          debug: (str) => {

          },
          reconnectDelay: 5000,
          heartbeatIncoming: 4000,
          heartbeatOutgoing: 4000,
        })

        // 연결 성공 시 콜백
        this.client.onConnect = () => {

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
    const subId = `/sub/chats/${chatId}`;

    // 이미 구독돼 있으면 최신 핸들러만 교체하고 끝
    if (this.subscriptions.has(subId)) {
      this.messageHandlers.set(subId, [onMessageReceived]); // ← 배열 재사용 X, 덮어쓰기
      return;
    }

    /* 새 구독 */
    const sub = this.client.subscribe(subId, (msg) =>
        this.handleIncomingMessage(chatId, msg)
    );
    this.subscriptions.set(subId, sub);
    this.messageHandlers.set(subId, [onMessageReceived]);
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

    }
  }

  /**
   * 메시지 전송
   * @param {string} chatId 채팅방 ID
   * @param {string} content 메시지 내용
   * @param {string} type 메시지 타입 (기본값: "CHAT")
   */
  sendMessage(chatId, content, type = "TEXT") {
    if (!this.client || !this.client.connected) {
      console.error("WebSocket이 연결되지 않았습니다.")
      return
    }

    if (!this.currentUser) {
      console.error("사용자 정보가 없습니다.")
      return
    }

    // 백엔드 MessageRequestDTO 형식에 맞게 수정
    const message = {
      chatId: Number.parseInt(chatId),
      content,
      type,
    }

    try {
      this.client.publish({
        destination: "/pub/api/chats/messages/send",
        body: JSON.stringify(message),
      })

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
      const raw = JSON.parse(stompMessage.body)


      // 추방 메시지 특별 처리
      if (raw.type === "NOTICE_KICK" && raw.targetId) {

        // 내가 추방당한 경우 체크
        if (this.currentUser && String(raw.targetId) === String(this.currentUser.userId)) {

          // 잠시 후 알림 표시 및 방 나가기
          setTimeout(() => {
            alert('채팅방에서 추방되었습니다.')
            this.handleKickOut(chatId)
          }, 1000)
        }
      }

      // ① 시스템 메시지 여부 구분
      const isSystem = raw.type.startsWith("NOTICE")

      const message = {
        id: String(raw.id),
        type: raw.type,              // NOTICE_JOIN, TEXT …
        content: raw.content,
        timestamp: raw.createdAt,
        isDeleted: raw.deleted,
        targetUserId: raw.targetId, // 추방 대상 ID 추가
        targetName: raw.targetName || null,
        sender: isSystem
            ? {                        // 시스템용 최소 프로필
              userId: null,
              name: "SYSTEM",
              avatar: null,
            }
            : {
              userId: String(raw.senderId),
              name: raw.senderName,
              avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${raw.senderName}`,
            },
      }

      // ② 핸들러에게 전달
      const subId = `/sub/chats/${chatId}`
      ;(this.messageHandlers.get(subId) || []).forEach(h => h(message))
    } catch (e) {
      console.error("메시지 처리 오류:", e)
    }
  }

  handleKickOut(chatId) {

    // 해당 채팅방 구독 해제
    this.unsubscribeFromChatRoom(chatId)


    // 채팅방 목록으로 이동
    if (typeof window !== 'undefined') {

      window.location.href = '/chats'
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
