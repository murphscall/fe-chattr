"use client"

// 인증 관련 커스텀 훅

import { useState, useEffect, useCallback } from "react"
import type { User } from "../types"
import * as authService from "../services/auth"

export function useAuth() {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const savedUser = localStorage.getItem("user")
            return savedUser ? JSON.parse(savedUser) : null
        } catch (error) {
            console.error("Failed to parse user from localStorage:", error)
            // 손상된 데이터가 있으면 제거
            localStorage.removeItem("user")
            return null
        }
    })

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // 사용자 정보 로드
    const loadUser = useCallback(async () => {
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
    }, [])

    // 로그인
    const login = useCallback(async (email: string, password: string): Promise<boolean> => {
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
    }, [])

    // 회원가입
    const register = useCallback(
        async (userData: {
            name: string
            email: string
            password: string
            phone?: string
        }): Promise<boolean> => {
            try {
                setLoading(true)
                const success = await authService.register(userData)

                // 자동 로그인 제거 - 회원가입 성공 여부만 반환
                setError(null)
                return success
            } catch (err) {
                setError(err instanceof Error ? err.message : "회원가입에 실패했습니다.")
                return false
            } finally {
                setLoading(false)
            }
        },
        [],
    )

    // 로그아웃
    const logout = useCallback(async (): Promise<void> => {
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
    }, [])

    // 컴포넌트 마운트 시 사용자 정보 로드
    useEffect(() => {
        loadUser()
    }, [loadUser])

    return {
        user,
        loading,
        error,
        login,
        register,
        logout,
        loadUser,
    }
}
