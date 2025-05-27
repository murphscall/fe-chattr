/**
 * 타임스탬프를 시간 문자열로 변환하는 함수
 * @param {string} timestamp ISO 형식의 타임스탬프 문자열
 * @returns {string} 시:분 형식의 시간 문자열
 */
export const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })
}
export const formatRelativeTime = (timestamp) => {
  const now = new Date()
  const past = new Date(timestamp)
  const diff = now.getTime() - past.getTime()

  const sec = Math.floor(diff / 1000)
  const min = Math.floor(sec / 60)
  const hour = Math.floor(min / 60)
  const day = Math.floor(hour / 24)

  if (min < 1) return "방금 전"
  if (min < 60) return `${min}분 전`
  if (hour < 24) return `${hour}시간 전`
  if (day < 7) return `${day}일 전`

  // 일주일 넘으면 날짜로 반환
  return past.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}