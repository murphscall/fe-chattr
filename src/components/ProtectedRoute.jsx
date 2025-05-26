"use client"

/**
 * 인증된 사용자만 접근할 수 있는 라우트 보호 컴포넌트
 */
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import LoadingSpinner from "./LoadingSpinner"

/**
 * 인증이 필요한 페이지를 보호하는 컴포넌트
 */
const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate to={redirectTo} replace />
    }

    return <>{children}</>
}

export default ProtectedRoute
