"use client"

import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import LoadingSpinner from "./LoadingSpinner"

interface AuthGuardProps {
    children: ReactNode
    redirectTo?: string
}

const AuthGuard = ({ children, redirectTo = "/login" }: AuthGuardProps) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate to={redirectTo} replace />
    }

    return <>{children}</>
}

export default AuthGuard
