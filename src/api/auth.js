import api from './CommonAxiosSet.js'



export const loginRequest = async(email , password) => {
    try{
        const response = await api.post('/api/auth/login', {email, password})
        const data = response.data;

        if(data.status !== "success"){
            throw new Error("로그인 실패");
        }
        console.log(data);

        const userData = {
            ...data.data,
            avatar: data.data.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${data.data.name}`,
        }

        return userData;
    }catch (e){
        console.error(e);
    }

}

export const logoutRequest = async() => {
    try{
        const response = await api.post("/api/auth/logout");
        const data = response.data;
        console.log(data)

        if(data.status !== "success"){
            throw new Error("로그아웃 실패")
        }
        return data.data
    }catch (e){
        console.error(e);
    }
}

export const registerRequest = async ({email , password , name , phone}) => {

    try{
        const response = await api.post('/api/users', {email , password , name , phone})
        const data = response.data;

        if(data.status !== "success"){
            throw new Error("로그아웃 실패")
        }
        return data.data;
    }catch (e){
        console.error(e);
    }
}

export const getCurrentUserRequest = async () => {
    try{
        const response = await api.get("/api/auth/authentication")
        const data = response.data;

        if(data.status !== "success"){
            return null;
        }
        console.log(data);
        return data.data;
    }catch (e){
        console.error("사용자 정보 가져오기 오류: "+e);
        return null;
    }
}

export async function refreshTokenRequest(){
    try {
        const response = await api.post("/api/auth/refresh")
        const data = response.data;
        return data.status === "success"
    } catch (error) {
        console.error("토큰 갱신 오류:", error)
        return false
    }
}
