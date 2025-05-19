import type { ChatRoom, Message, User } from "./types"

// 더미 사용자 데이터
const dummyUsers: User[] = [
  {
    userId: "user1",
    email:"wlsgnwkd22@naver.com",
    phone: "010-2212-9624",
    createdAt:"2011-11-11",
    name: "김채팅",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=김채팅",

  },
  {
    userId: "user2",
    email:"wlsgnwkd22@naver.com",
    phone: "010-2212-9624",
    createdAt:"2011-11-11",
    name: "이메시지",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=이메시지",
  },
  {
    userId: "user3",
    email:"wlsgnwkd22@naver.com",
    phone: "010-2212-9624",
    createdAt:"2011-11-11",
    name: "박소통",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=박소통",
  },
  {
    userId: "user4",
    email:"wlsgnwkd22@naver.com",
    phone: "010-2212-9624",
    createdAt:"2011-11-11",
    name: "최대화",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=최대화",
  },
  {
    userId: "system",
    email:"wlsgnwkd22@naver.com",
    phone: "010-2212-9624",
    createdAt:"2011-11-11",
    name: "시스템",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=System",
  },
]

// 더미 채팅방 데이터
export const dummyChatRooms: ChatRoom[] = [
  {
    id: "1",
    name: "일상 대화방",
    createdBy: "system",
    participants: [dummyUsers[0], dummyUsers[1]],
    category: "일상",
    participantsCount: 12,
    isHot: true,
    lastMessage: {
      id: "msg1",
      sender: dummyUsers[0],
      content: "오늘 날씨가 정말 좋네요!",
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    },
  },
  {
    id: "2",
    name: "게임 모임",
    createdBy: "system",
    participants: [dummyUsers[1], dummyUsers[2]],
    category: "게임",
    participantsCount: 28,
    isHot: true,
    lastMessage: {
      id: "msg2",
      sender: dummyUsers[1],
      content: "오늘 저녁 8시에 같이 게임할 사람?",
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
  },
  {
    id: "3",
    name: "음악 추천",
    createdBy: "system",
    participants: [dummyUsers[2], dummyUsers[3]],
    category: "음악",
    participantsCount: 8,
    isHot: false,
    lastMessage: {
      id: "msg3",
      sender: dummyUsers[2],
      content: "요즘 인기있는 노래 추천해주세요!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
  },
  {
    id: "4",
    name: "영화 토론방",
    createdBy: "system",
    participants: [dummyUsers[0], dummyUsers[3]],
    category: "영화",
    participantsCount: 15,
    isHot: false,
    lastMessage: {
      id: "msg4",
      sender: dummyUsers[3],
      content: "어제 개봉한 영화 보신 분 있나요?",
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    },
  },
  {
    id: "5",
    name: "IT 기술 공유",
    createdBy: "system",
    participants: [dummyUsers[1], dummyUsers[2]],
    category: "IT/기술",
    participantsCount: 20,
    isHot: true,
    lastMessage: {
      id: "msg5",
      sender: dummyUsers[1],
      content: "React 18 새로운 기능에 대해 이야기해봐요",
      timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
  },
  {
    id: "6",
    name: "취업 정보 공유",
    createdBy: "user1",
    participants: [dummyUsers[0], dummyUsers[2]],
    category: "취업/진로",
    participantsCount: 18,
    isHot: true,
    lastMessage: {
      id: "msg6",
      sender: dummyUsers[0],
      content: "요즘 IT 취업 시장 어떤가요?",
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    },
  },
  {
    id: "7",
    name: "여행 계획",
    createdBy: "user2",
    participants: [dummyUsers[1], dummyUsers[3]],
    category: "여행",
    participantsCount: 7,
    isHot: false,
    lastMessage: {
      id: "msg7",
      sender: dummyUsers[3],
      content: "제주도 여행 코스 추천해주세요!",
      timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    },
  },
  {
    id: "8",
    name: "맛집 탐방",
    createdBy: "user3",
    participants: [dummyUsers[2], dummyUsers[0]],
    category: "음식",
    participantsCount: 14,
    isHot: true,
    lastMessage: {
      id: "msg8",
      sender: dummyUsers[2],
      content: "강남역 근처 맛집 추천 부탁드려요!",
      timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    },
  },
]

// 더미 메시지 데이터
export const dummyMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "msg1-1",
      sender: dummyUsers[4],
      content: "일상 대화방에 오신 것을 환영합니다!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    },
    {
      id: "msg1-2",
      sender: dummyUsers[1],
      content: "안녕하세요! 반갑습니다 :)",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
    {
      id: "msg1-3",
      sender: dummyUsers[2],
      content: "오늘 날씨가 정말 좋네요!",
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
    {
      id: "msg1-4",
      sender: dummyUsers[0],
      content: "네, 정말 화창하네요. 다들 주말 계획 있으신가요?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    },
  ],
  "2": [
    {
      id: "msg2-1",
      sender: dummyUsers[4],
      content: "게임 모임방에 오신 것을 환영합니다!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    },
    {
      id: "msg2-2",
      sender: dummyUsers[2],
      content: "롤 같이 하실 분 계신가요?",
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    },
    {
      id: "msg2-3",
      sender: dummyUsers[3],
      content: "저요! 오늘 저녁에 가능합니다.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
    {
      id: "msg2-4",
      sender: dummyUsers[1],
      content: "오늘 저녁 8시에 같이 게임할 사람?",
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
  ],
  "3": [
    {
      id: "msg3-1",
      sender: dummyUsers[4],
      content: "음악 추천방에 오신 것을 환영합니다!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    },
    {
      id: "msg3-2",
      sender: dummyUsers[0],
      content: "요즘 뉴진스 노래 정말 좋은 것 같아요",
      timestamp: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
    },
    {
      id: "msg3-3",
      sender: dummyUsers[1],
      content: "저는 아이유 신곡 추천합니다!",
      timestamp: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
    },
    {
      id: "msg3-4",
      sender: dummyUsers[2],
      content: "요즘 인기있는 노래 추천해주세요!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
  ],
  "4": [
    {
      id: "msg4-1",
      sender: dummyUsers[4],
      content: "영화 토론방에 오신 것을 환영합니다!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    },
    {
      id: "msg4-2",
      sender: dummyUsers[3],
      content: "인터스텔라 정말 명작인 것 같아요",
      timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
    },
    {
      id: "msg4-3",
      sender: dummyUsers[0],
      content: "저는 최근에 본 '듄' 시리즈가 인상적이었어요",
      timestamp: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
    },
    {
      id: "msg4-4",
      sender: dummyUsers[3],
      content: "어제 개봉한 영화 보신 분 있나요?",
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    },
  ],
  "5": [
    {
      id: "msg5-1",
      sender: dummyUsers[4],
      content: "IT 기술 공유방에 오신 것을 환영합니다!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    },
    {
      id: "msg5-2",
      sender: dummyUsers[2],
      content: "Next.js 14 써보신 분 계신가요?",
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    },
    {
      id: "msg5-3",
      sender: dummyUsers[0],
      content: "저는 최근에 시작했는데 App Router가 정말 편리한 것 같아요",
      timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    },
    {
      id: "msg5-4",
      sender: dummyUsers[1],
      content: "React 18 새로운 기능에 대해 이야기해봐요",
      timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
  ],
}
