// 인증 관련 API 호출을 중앙화하는 서비스 파일

import type { User, ApiResponse, LoginRequest, RegisterRequest } from "../types"

// 로그인 함수
export async function login(email: string, password: string): Promise<User> {
    const loginData: LoginRequest = { email, password }

    const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include", // 쿠키를 포함하기 위해 필요
    })

    const data: ApiResponse<User> = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "로그인에 실패했습니다")
    }

    // 아바타 URL 추가 (백엔드에서 제공하지 않는 경우)
    const userData = {
        ...data.data,
        avatar: data.data.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${data.data.name}`,
    }

    return userData
}

// 회원가입 함수
export async function register(userData: {
    name: string
    email: string
    password: string
    phone?: string
}): Promise<boolean> {
    const registerData: RegisterRequest = {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        phone: userData.phone || "",
    }

    const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
        credentials: "include",
    })

    const data: ApiResponse<User> = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "회원가입에 실패했습니다")
    }

    return true
}

// 로그아웃 함수
export async function logout(): Promise<void> {
    const response = await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include",
    })

    const data: ApiResponse<null> = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "로그아웃에 실패했습니다")
    }
}

// 현재 사용자 정보 가져오기
export async function getCurrentUser(): Promise<User | null> {
    try {
        const response = await fetch("http:localhost:8080/api/users/me", {
            credentials: "include",
        })

        const data: ApiResponse<User> = await response.json()

        if (data.status !== "success") {
            return null
        }

        // 아바타 URL 추가 (백엔드에서 제공하지 않는 경우)
        const userData = {
            ...data.data,
            avatar: data.data.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${data.data.name}`,
        }

        return userData
    } catch (error) {
        console.error("사용자 정보 가져오기 오류:", error)
        return null
    }
}

// 토큰 갱신 함수
export async function refreshToken(): Promise<boolean> {
    try {
        const response = await fetch("http://localhost:8080/api/auth/refresh", {
            method: "POST",
            credentials: "include",
        })

        const data: ApiResponse<null> = await response.json()
        return data.status === "success"
    } catch (error) {
        console.error("토큰 갱신 오류:", error)
        return false
    }
}
