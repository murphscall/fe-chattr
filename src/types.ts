// 백엔드 응답 구조에 맞는 인터페이스 정의
export interface ApiResponse<T> {
  status: string
  statusCode: number
  data: T
  message?: string
}

// User 인터페이스 수정 (백엔드 구조에 맞게)
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

// 백엔드 ChatTopic enum과 일치하는 타입 정의
export enum ChatTopic {
  GENERAL = "GENERAL", // 일반 대화
  STUDY = "STUDY", // 공부, 학업 관련
  WORK = "WORK", // 업무, 프로젝트
  SPORTS = "SPORTS", // 스포츠 이야기
  MOVIES = "MOVIES", // 영화, 드라마
  MUSIC = "MUSIC", // 음악
  GAMES = "GAMES", // 게임
  TECH = "TECH", // 기술, 개발
  TRAVEL = "TRAVEL", // 여행
  FOOD = "FOOD", // 음식, 맛집
  PETS = "PETS", // 반려동물
  FASHION = "FASHION", // 패션, 옷
  BEAUTY = "BEAUTY", // 뷰티, 화장
  HEALTH = "HEALTH", // 건강, 헬스, 운동
  RELATIONSHIPS = "RELATIONSHIPS", // 연애, 인간관계
  FINANCE = "FINANCE", // 주식, 재테크
  BOOKS = "BOOKS", // 독서
  ART = "ART", // 예술, 그림
  HOBBY = "HOBBY", // 취미
  LANGUAGES = "LANGUAGES", // 언어 교환
  CAREER = "CAREER", // 진로, 취업
  ADULT = "ADULT", // 성인 주제
  ETC = "ETC", // 기타
}

// 백엔드 ChatRole enum 정의
export enum ChatRole {
  OWNER = "OWNER", // 방장
  ADMIN = "ADMIN", // 관리자
  MEMBER = "MEMBER", // 일반 회원
}

// 백엔드 Chat 엔티티에 맞는 인터페이스
export interface BackendChat {
  chatId: number
  title: string
  description: string | null
  createdAt: string
  // 응답에 topic과 chatUsers가 포함되어 있지 않음
}

// 백엔드 ChatUser 엔티티에 맞는 인터페이스
export interface BackendChatUser {
  id: number
  role: ChatRole
  joinedAt: string
  user: User
}

// 프론트엔드에서 사용할 ChatRoom 인터페이스 (기존 코드와 호환)
export interface ChatRoom {
  id: string
  name: string
  description?: string
  createdBy: string
  participants: User[]
  lastMessage?: Message
  category: string
  participantsCount: number
  isHot?: boolean
}

// 프론트엔드에서 사용자에게 보여줄 한글 카테고리
export type ChatCategory =
    | "일반 대화"
    | "공부/학업"
    | "업무/프로젝트"
    | "스포츠"
    | "영화/드라마"
    | "음악"
    | "게임"
    | "기술/개발"
    | "여행"
    | "음식/맛집"
    | "반려동물"
    | "패션"
    | "뷰티/화장"
    | "건강/운동"
    | "연애/인간관계"
    | "재테크"
    | "독서"
    | "예술/그림"
    | "취미"
    | "언어 교환"
    | "진로/취업"
    | "성인"
    | "기타"

// 한글 카테고리와 백엔드 enum 매핑
export const CATEGORY_TO_TOPIC_MAP: Record<ChatCategory, ChatTopic> = {
  "일반 대화": ChatTopic.GENERAL,
  "공부/학업": ChatTopic.STUDY,
  "업무/프로젝트": ChatTopic.WORK,
  스포츠: ChatTopic.SPORTS,
  "영화/드라마": ChatTopic.MOVIES,
  음악: ChatTopic.MUSIC,
  게임: ChatTopic.GAMES,
  "기술/개발": ChatTopic.TECH,
  여행: ChatTopic.TRAVEL,
  "음식/맛집": ChatTopic.FOOD,
  반려동물: ChatTopic.PETS,
  패션: ChatTopic.FASHION,
  "뷰티/화장": ChatTopic.BEAUTY,
  "건강/운동": ChatTopic.HEALTH,
  "연애/인간관계": ChatTopic.RELATIONSHIPS,
  재테크: ChatTopic.FINANCE,
  독서: ChatTopic.BOOKS,
  "예술/그림": ChatTopic.ART,
  취미: ChatTopic.HOBBY,
  "언어 교환": ChatTopic.LANGUAGES,
  "진로/취업": ChatTopic.CAREER,
  성인: ChatTopic.ADULT,
  기타: ChatTopic.ETC,
}

// 백엔드 enum에서 한글 카테고리로 변환
export const TOPIC_TO_CATEGORY_MAP: Record<ChatTopic, ChatCategory> = {
  [ChatTopic.GENERAL]: "일반 대화",
  [ChatTopic.STUDY]: "공부/학업",
  [ChatTopic.WORK]: "업무/프로젝트",
  [ChatTopic.SPORTS]: "스포츠",
  [ChatTopic.MOVIES]: "영화/드라마",
  [ChatTopic.MUSIC]: "음악",
  [ChatTopic.GAMES]: "게임",
  [ChatTopic.TECH]: "기술/개발",
  [ChatTopic.TRAVEL]: "여행",
  [ChatTopic.FOOD]: "음식/맛집",
  [ChatTopic.PETS]: "반려동물",
  [ChatTopic.FASHION]: "패션",
  [ChatTopic.BEAUTY]: "뷰티/화장",
  [ChatTopic.HEALTH]: "건강/운동",
  [ChatTopic.RELATIONSHIPS]: "연애/인간관계",
  [ChatTopic.FINANCE]: "재테크",
  [ChatTopic.BOOKS]: "독서",
  [ChatTopic.ART]: "예술/그림",
  [ChatTopic.HOBBY]: "취미",
  [ChatTopic.LANGUAGES]: "언어 교환",
  [ChatTopic.CAREER]: "진로/취업",
  [ChatTopic.ADULT]: "성인",
  [ChatTopic.ETC]: "기타",
}

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
