"use client"

/**
 * 애플리케이션 진입점
 * 라우팅 및 전역 상태 관리
 */
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyles"
import { theme } from "./styles/theme"
import { AuthProvider } from "./context/AuthContext"
import { ChatProvider } from "./context/ChatContext"
import ProtectedRoute from "./components/ProtectedRoute"

// 페이지 컴포넌트 임포트
import MainPage from "./pages/MainPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ChatListPage from "./pages/ChatListPage"
import ChatRoomPage from "./pages/ChatRoomPage"
import MyPage from "./pages/MyPage"
import FeaturesPage from "./pages/FeaturePage.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AuthProvider>
                <ChatProvider>
                    <Router>
                        <AppRouter/>
                    </Router>
                </ChatProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
