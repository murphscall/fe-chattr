import axios from 'axios';
const API_URL = import.meta.env.VITE_API_BASE_URL;

 const api = axios.create({
    baseURL: `${API_URL}`,
     headers: {
        'Content-Type': 'application/json',
     },
    withCredentials: true
});

let isRefreshing = false;
let retryQueue = [];

function processQueue(error) {
    retryQueue.forEach((callback) => {
        if (error) callback.reject(error);
        else callback.resolve();
    });
    retryQueue = [];
}

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    retryQueue.push({
                        resolve: () => resolve(api(originalRequest)),
                        reject: (err) => reject(err),
                    });
                });
            }

            isRefreshing = true;

            try {
                await axios.post(`${API_URL}/api/auth/refresh`, {}, { withCredentials: true });
                processQueue(null);
                return api(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError);
                // ❗ 실패해도 아무 것도 안 함 → 비로그인 상태로 둠
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);


 export default api;


