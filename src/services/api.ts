// API 호출을 위한 유틸리티 함수들

import type { ApiResponse } from "../types"

// 기본 API 요청 함수
export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const defaultOptions: RequestInit = {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    }

    const response = await fetch(endpoint, {
        ...defaultOptions,
        ...options,
    })

    const data: ApiResponse<T> = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "API 요청 실패")
    }

    return data
}

// GET 요청
export async function get<T>(endpoint: string): Promise<T> {
    const response = await apiRequest<T>(endpoint)
    return response.data
}

// POST 요청
export async function post<T>(endpoint: string, body: any): Promise<T> {
    const response = await apiRequest<T>(endpoint, {
        method: "POST",
        body: JSON.stringify(body),
    })
    return response.data
}

// PUT 요청
export async function put<T>(endpoint: string, body: any): Promise<T> {
    const response = await apiRequest<T>(endpoint, {
        method: "PUT",
        body: JSON.stringify(body),
    })
    return response.data
}

// DELETE 요청
export async function del<T>(endpoint: string): Promise<T> {
    const response = await apiRequest<T>(endpoint, {
        method: "DELETE",
    })
    return response.data
}

// 에러 핸들링 함수
export function handleApiError(error: any): string {
    console.error("API 오류:", error)

    if (error instanceof Error) {
        return error.message
    }

    return "알 수 없는 오류가 발생했습니다."
}
