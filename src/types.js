/**
 * 프로젝트에서 사용하는 상수와 매핑 객체들
 */

// 채팅방 주제 열거형 (백엔드와 일치)
export const ChatTopic = {
    GENERAL: "GENERAL",
    STUDY: "STUDY",
    WORK: "WORK",
    SPORTS: "SPORTS",
    MOVIES: "MOVIES",
    MUSIC: "MUSIC",
    GAMES: "GAMES",
    TECH: "TECH",
    TRAVEL: "TRAVEL",
    FOOD: "FOOD",
    PETS: "PETS",
    FASHION: "FASHION",
    BEAUTY: "BEAUTY",
    HEALTH: "HEALTH",
    RELATIONSHIPS: "RELATIONSHIPS",
    FINANCE: "FINANCE",
    BOOKS: "BOOKS",
    ART: "ART",
    HOBBY: "HOBBY",
    LANGUAGES: "LANGUAGES",
    CAREER: "CAREER",
    ADULT: "ADULT",
    ETC: "ETC",
}

// 채팅방 역할 열거형
export const ChatRole = {
    OWNER: "MASTER",
    ADMIN: "MANAGER",
    MEMBER: "MEMBER",
}

// 프론트엔드에서 사용할 한글 카테고리 목록
export const CATEGORIES = [
    "일반 대화",
    "공부/학업",
    "업무/프로젝트",
    "스포츠",
    "영화/드라마",
    "음악",
    "게임",
    "기술/개발",
    "여행",
    "음식/맛집",
    "반려동물",
    "패션",
    "뷰티/화장",
    "건강/운동",
    "연애/인간관계",
    "재테크",
    "독서",
    "예술/그림",
    "취미",
    "언어 교환",
    "진로/취업",
    "성인",
    "기타",
]

// 한글 카테고리와 백엔드 enum 매핑
export const CATEGORY_TO_TOPIC_MAP = {
    "일반 대화": ChatTopic.GENERAL,
    "공부/학업": ChatTopic.STUDY,
    "업무/프로젝트": ChatTopic.WORK,
    "스포츠": ChatTopic.SPORTS,
    "영화/드라마": ChatTopic.MOVIES,
    "음악": ChatTopic.MUSIC,
    "게임": ChatTopic.GAMES,
    "기술/개발": ChatTopic.TECH,
    "여행": ChatTopic.TRAVEL,
    "음식/맛집": ChatTopic.FOOD,
    "반려동물": ChatTopic.PETS,
    "패션": ChatTopic.FASHION,
    "뷰티/화장": ChatTopic.BEAUTY,
    "건강/운동": ChatTopic.HEALTH,
    "연애/인간관계": ChatTopic.RELATIONSHIPS,
    "재테크": ChatTopic.FINANCE,
    "독서": ChatTopic.BOOKS,
    "예술/그림": ChatTopic.ART,
    "취미": ChatTopic.HOBBY,
    "언어 교환": ChatTopic.LANGUAGES,
    "진로/취업": ChatTopic.CAREER,
    "성인": ChatTopic.ADULT,
    "기타": ChatTopic.ETC,
}

// 백엔드 enum에서 한글 카테고리로 변환
export const TOPIC_TO_CATEGORY_MAP = {
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
