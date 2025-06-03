/**
 * 인증 관련 API 호출을 처리하는 서비스
 */

import api from "./CommonAxiosSet.js";

/**
 * 로그인 함수
 * @param {string} email 사용자 이메일
 * @param {string} password 사용자 비밀번호
 * @returns {Promise<Object>} 로그인된 사용자 정보
 */
export async function login(email, password) {
    const loginData = { email, password }

    const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include", // 쿠키를 포함하기 위해 필요
    })

    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "로그인에 실패했습니다")
    }

    // 백엔드 응답 구조에 맞게 수정
    const userData = {
        userId: data.data.userId.toString(), // Long을 string으로 변환
        email: data.data.email,
        name: data.data.name,
        phone: data.data.phone,
        createdAt: data.data.createdAt,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${data.data.name}`, // 아바타 생성
    }

    return userData
}

/**
 * 회원가입 함수
 * @param {Object} userData 사용자 등록 정보
 * @returns {Promise<boolean>} 회원가입 성공 여부
 */
export async function register(userData) {
    const registerData = {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        phone: userData.phone,
    }

    const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
        credentials: "include",
    })

    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "회원가입에 실패했습니다")
    }

    return true
}

/**
 * 로그아웃 함수
 */
export async function logout() {
    console.log("로그아웃함수실행")
    const response = await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include",
    })

    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "로그아웃에 실패했습니다")
    }
}

/**
 * 현재 사용자 정보 가져오기
 * @returns {Promise<Object|null>} 현재 로그인된 사용자 정보 또는 null
 */
export async function getCurrentUser() {
    try {
        const response = await api.get("http://localhost:8080/api/auth/authentication", {
            credentials: "include",
        })

        const data = response.data
        console.log("axios 데이터" , data)
        if (data.status !== "success") {
            return null
        }

        // 백엔드 응답 구조에 맞게 수정
        const userData = {
            userId: data.data.userId.toString(), // Long을 string으로 변환
            email: data.data.email,
            name: data.data.name,
            phone: data.data.phone,
            createdAt: data.data.createdAt,
            avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${data.data.name}`, // 아바타 생성
        }

        return userData
    } catch (error) {
        console.error("사용자 정보 가져오기 오류:", error)
        return null
    }
}

/**
 * 토큰 갱신 함수
 * @property
 * @returns {Promise<boolean>} 토큰 갱신 성공 여부
 */
export async function refreshToken() {
    try {
        const response = await fetch("http://localhost:8080/api/auth/refresh", {
            method: "POST",
            credentials: "include",
        })

        const data = await response.json()
        return data.status === "success"
    } catch (error) {
        console.error("토큰 갱신 오류:", error)
        return false
    }
}
