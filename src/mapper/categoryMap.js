export const CATEGORIES = [
    "일반 대화", "공부/학업", "업무/프로젝트", "스포츠", "영화/드라마",
    "음악", "게임", "기술/개발", "여행", "음식/맛집",
    "반려동물", "패션", "뷰티/화장", "건강/운동", "연애/인간관계",
    "재테크", "독서", "예술/그림", "취미", "언어 교환",
    "진로/취업", "성인", "기타"
];
export const TOPIC_TO_CATEGORY_MAP = {
    GENERAL: "일반 대화",
    STUDY: "공부/학업",
    WORK: "업무/프로젝트",
    SPORTS: "스포츠",
    MOVIES: "영화/드라마", // ✅ 수정됨
    MUSIC: "음악",
    GAMES: "게임",
    TECH: "기술/개발",
    TRAVEL: "여행",
    FOOD: "음식/맛집",
    PETS: "반려동물",       // ✅ 'PET' → 'PETS'로 수정됨
    FASHION: "패션",
    BEAUTY: "뷰티/화장",
    HEALTH: "건강/운동",
    RELATIONSHIPS: "연애/인간관계",
    FINANCE: "재테크",
    BOOKS: "독서",
    ART: "예술/그림",
    HOBBY: "취미",
    LANGUAGES: "언어 교환",
    CAREER: "진로/취업",
    ADULT: "성인",
    ETC: "기타"
};


export const CATEGORY_TO_TOPIC_MAP = Object.fromEntries(
    Object.entries(TOPIC_TO_CATEGORY_MAP).map(([k, v]) => [v, k])
);