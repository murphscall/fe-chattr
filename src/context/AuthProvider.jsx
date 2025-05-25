import {useCallback, useEffect, useState} from "react";
import * as authService from "../api/auth.js";
import {AuthContext} from "./AuthContext.jsx";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // 전역 유저 상태
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    // 사용자 정보 로드
    const loadUser = useCallback(async () => {
        try {
            setLoading(true)
            const userData = await authService.getCurrentUserRequest()

            if (userData) {
                setUser(userData);
                setIsAuthenticated(true)

            } else {
                setUser(null)
                setIsAuthenticated(false)

            }

        } catch (error) {
            console.error(error)
            setUser(null)

        } finally {
            setLoading(false)
        }
    }, [])




    const login = useCallback(async (email, password)=> {
        try {
            setLoading(true)
            const userData = await authService.loginRequest(email, password)
            setUser(userData)

            return true
        } catch (err) {
            console.error(err)
            return false
        } finally {
            setLoading(false)
        }
    }, [])




    // 회원가입
    const register = useCallback(
        async (userData)=> {
        try {
            setLoading(true)
            const success = await authService.registerRequest(userData)

            return success
        } catch (err) {
            console.error(err)
            return false
        } finally {
            setLoading(false)
        }
    },
    [],
)

    // 로그아웃
    const logout = useCallback(async ()=> {
        try {
            setLoading(true)
            await authService.logoutRequest()
            setUser(null)
            console.log("로그아웃실행됨")
        } catch (err) {
           console.error(err)
        } finally {
            setLoading(false)
        }
    }, [])









    useEffect(() => {
        loadUser();

    },[loadUser])

    return (
        <AuthContext.Provider value={{ user, loading , register, login, logout , loadUser , isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}