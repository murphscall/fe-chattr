/**
 * 타임스탬프를 시간 문자열로 변환하는 함수
 * @param {string} timestamp ISO 형식의 타임스탬프 문자열
 * @returns {string} 시:분 형식의 시간 문자열
 */
export const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })
}
