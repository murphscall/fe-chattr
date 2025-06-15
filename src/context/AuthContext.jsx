"use client"

/**
 * 인증 상태 관리를 위한 Context
 */
import { createContext, useContext, useState, useEffect } from "react"
import * as authService from "../services/auth"

const AuthContext = createContext(null)

/**
 * 인증 Context Provider
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const savedUser = localStorage.getItem("user")
            return savedUser ? JSON.parse(savedUser) : null
        } catch (error) {
            console.error("Failed to parse user from localStorage:", error)
            localStorage.removeItem("user")
            return null
        }
    })

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    /**
     * 사용자 정보 로드
     */
    const loadUser = async () => {
        try {
            setLoading(true)
            const userData = await authService.getCurrentUser()

            if (userData) {
                setUser(userData)
                localStorage.setItem("user", JSON.stringify(userData))
            } else {
                setUser(null)
                localStorage.removeItem("user")
            }

            setError(null)
        } catch (err) {
            setError("사용자 정보를 불러오는데 실패했습니다.")
            setUser(null)
            localStorage.removeItem("user")
        } finally {
            setLoading(false)
        }
    }

    /**
     * 로그인
     */
    const login = async (email, password) => {
        try {
            setLoading(true)
            const userData = await authService.login(email, password)
            setUser(userData)
            localStorage.setItem("user", JSON.stringify(userData))
            setError(null)
            return true
        } catch (err) {
            setError(err instanceof Error ? err.message : "로그인에 실패했습니다.")
            return false
        } finally {
            setLoading(false)
        }
    }

    /**
     * 회원가입
     */
    const register = async (userData) => {
        try {
            setLoading(true)
            const success = await authService.register(userData)
            setError(null)
            return success
        } catch (err) {
            setError(err instanceof Error ? err.message : "회원가입에 실패했습니다.")
            return false
        } finally {
            setLoading(false)
        }
    }

    /**
     * 로그아웃
     */
    const logout = async () => {

        try {
            setLoading(true)
            await authService.logout()
            setUser(null)
            localStorage.removeItem("user")
            setError(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : "로그아웃에 실패했습니다.")
        } finally {
            setLoading(false)
        }
    }

    // 컴포넌트 마운트 시 사용자 정보 로드
    useEffect(() => {
        loadUser()
    }, [])

    const value = {
        user,
        loading,
        error,
        login,
        register,
        logout,
        loadUser,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * 인증 Context 사용 훅
 * AuthContext 내부에 정의되어 있어서 별도 파일 불필요
 */
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
