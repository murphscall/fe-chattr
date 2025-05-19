// 백엔드 응답 구조에 맞는 인터페이스 정의
export interface ApiResponse<T> {
  status: string
  statusCode: string
  data: T
  message: string
}

export interface User {
  userId: string
  email: string
  name: string
  phone: string
  createdAt: string
  avatar?: string // 프론트엔드에서 필요한 추가 필드
}

export interface Message {
  id: string
  sender: User
  content: string
  timestamp: string
}

export interface ChatRoom {
  id: string
  name: string
  createdBy: string
  participants: User[]
  lastMessage?: Message
  category: string
  participantsCount: number
  isHot?: boolean
}

export type ChatCategory =
    | "일상"
    | "게임"
    | "음악"
    | "영화"
    | "스포츠"
    | "여행"
    | "음식"
    | "패션"
    | "IT/기술"
    | "취업/진로"
    | "학교/학원"
    | "기타"

// 로그인 요청 데이터 타입
export interface LoginRequest {
  email: string
  password: string
}

// 회원가입 요청 데이터 타입
export interface RegisterRequest {
  email: string
  password: string
  name: string
  phone: string
}
