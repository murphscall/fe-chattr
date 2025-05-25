import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext, useAuth } from "./context/AuthContext.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

// ✅ SockJS + STOMP import
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import {webSocketService} from "./api/websocket.js";

function App() {
    const { loading } = useContext(AuthContext);
    const [isAppLoading, setIsAppLoading] = useState(true);
    const { user } = useAuth();

    // 👉 페이지 전환 시 스크롤 초기화
    useEffect(() => {
        const handleRouteChange = () => window.scrollTo(0, 0);
        window.addEventListener("popstate", handleRouteChange);
        return () => window.removeEventListener("popstate", handleRouteChange);
    }, []);

    // 👉 인증 로딩 끝나면 앱 로딩 해제
    useEffect(() => {
        if (!loading) {
            setIsAppLoading(false);
        }
    }, [loading]);

    // 사용자 로그인/로그아웃 시 WebSocket 연결 관리
    useEffect(() => {
        // 로그아웃 시 WebSocket 연결 종료
        if (!user) {
            webSocketService.disconnect()
            return
        }

        // 로그인 시 WebSocket 초기화 (실제 연결은 채팅방 입장 시 수행)
        const initWebSocket = async () => {
            try {
                await webSocketService.init(user)
                console.log("WebSocket 초기화 완료")
            } catch (error) {
                console.error("WebSocket 초기화 오류:", error)
            }
        }

        initWebSocket()

        // 컴포넌트 언마운트 또는 사용자 변경 시 연결 종료
        return () => {
            webSocketService.disconnect()
        }
    }, [user])


    if (isAppLoading) {
        return <LoadingSpinner />;
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <AppRouter />
            </Router>
        </ThemeProvider>
    );
}

export default App;
