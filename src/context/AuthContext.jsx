import {createContext,useContext} from "react";


export const AuthContext = createContext(null);


// 다른 곳에서 쉽게 쓰기 위한 커스텀 훅
export const useAuth = () => useContext(AuthContext);