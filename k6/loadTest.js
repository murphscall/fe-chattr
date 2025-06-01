// k6/loginLoadTest.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 20,         // 10명 동시 로그인
    duration: '10s',   // 5초 동안 부하
};

const users = [
    { email: "wlsgnwkd22@naver.com", password: "sy8583lk^^" },
    { email: "wlsgnwkd22@gmail.com", password: "sy8583lk^^" },
    { email: "rlawlsgn22@naver.com", password: "sy8583lk^^" },
    { email: "rlawlsgn22@gmail.com", password: "sy8583lk^^" },
    { email: "wlsgn22@gmail.com", password: "sy8583lk^^" },
    { email: "wlsgnwkd22@hanmail.net", password: "sy8583lk^^" },

];

export default function () {
    // 각 VU(Virtual User)가 자기 고유 번호로 계정 나눠 쓰기
    const user = users[__VU % users.length];

    const url = 'http://localhost:8080/api/auth/login';

    const payload = JSON.stringify({
        email: user.email,
        password: user.password,
    });

    const headers = {
        'Content-Type': 'application/json',
    };

    const res = http.post(url, payload, { headers });

    check(res, {
        'status is 200': (r) => r.status === 200,
        'Set-Cookie contains accessToken': (r) => {
            return r.cookies['accessToken'] !== undefined;
        } // 서버 응답 기준 맞게 수정
    });
}