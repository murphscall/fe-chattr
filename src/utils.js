export const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })
}
