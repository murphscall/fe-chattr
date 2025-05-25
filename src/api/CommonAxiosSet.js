import axios from 'axios';

 const api = axios.create({
    baseURL: 'http://localhost:8080',
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
                await axios.post('http://localhost:8080/api/auth/refresh', {}, { withCredentials: true });
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


