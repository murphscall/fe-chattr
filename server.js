// 이것은 채팅 앱을 위한 간단한 서버 구현입니다.
// 실제 애플리케이션에서는 더 견고한 설정을 사용하는 것이 좋습니다.
const { createServer } = require("http")
const { Server } = require("socket.io")

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

// 데이터 저장소 (실제 애플리케이션에서는 데이터베이스를 사용해야 합니다)
const users = []
const chatRooms = []
const messages = {}

io.on("connection", (socket) => {
  console.log("사용자 연결됨")

  // 사용자 추가
  const user = socket.handshake.auth.user
  if (user) {
    const existingUserIndex = users.findIndex((u) => u.id === user.id)
    if (existingUserIndex === -1) {
      users.push(user)
    } else {
      users[existingUserIndex] = user
    }
  }

  // 채팅방 목록 요청 처리
  socket.on("getChatRooms", () => {
    socket.emit("chatRooms", chatRooms)
  })

  // 채팅방 생성 처리
  socket.on("createChatRoom", (roomData) => {
    const newRoom = {
      id: Date.now().toString(),
      name: roomData.name,
      createdBy: roomData.createdBy,
      participants: [],
    }

    chatRooms.push(newRoom)
    io.emit("chatRooms", chatRooms)
  })

  // 채팅방 참여 처리
  socket.on("joinChatRoom", (roomId) => {
    const room = chatRooms.find((r) => r.id === roomId)
    if (room && user) {
      if (!room.participants.some((p) => p.id === user.id)) {
        room.participants.push(user)
      }
      socket.join(roomId)
    }
  })

  // 채팅방 메시지 요청 처리
  socket.on("getRoomMessages", (roomId) => {
    socket.emit("messages", roomId, messages[roomId] || [])
  })

  // 메시지 처리
  socket.on("message", (roomId, message) => {
    if (!messages[roomId]) {
      messages[roomId] = []
    }

    messages[roomId].push(message)

    // 해당 채팅방의 마지막 메시지 업데이트
    const room = chatRooms.find((r) => r.id === roomId)
    if (room) {
      room.lastMessage = message
    }

    // 메시지를 해당 방에 있는 모든 사용자에게 브로드캐스트
    socket.to(roomId).emit("message", roomId, message)
    io.emit("chatRooms", chatRooms)
  })

  // 연결 해제 처리
  socket.on("disconnect", () => {
    console.log("사용자 연결 해제됨")
    if (user) {
      // 실제 구현에서는 사용자를 완전히 제거하지 않고 상태만 변경하는 것이 좋습니다
      // 여기서는 간단한 예시로 제거합니다
      const index = users.findIndex((u) => u.id === user.id)
      if (index !== -1) {
        users.splice(index, 1)
      }
    }
  })
})

httpServer.listen(3001, () => {
  console.log("서버가 3001 포트에서 실행 중입니다")
})
