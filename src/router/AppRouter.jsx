import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import MainPage from "../pages/MainPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import ChatListPage from "../pages/ChatListPage.jsx";
import * as ChatService from "../services/chat.js";
import ChatRoomPage from "../pages/ChatRoomPage.jsx";
import FeaturesPage from "../pages/FeaturePage.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import MyPage from "../pages/MyPage.jsx";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login"  element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/feature" element={<FeaturesPage />} />
            <Route path="/chats" element={<ChatListPage
                onCreateChatRoom={ChatService.createChatRoom}
                onJoinChatRoom={ChatService.joinChatRoom}
            />}/>
            <Route path="/chat/:roomId" element={
                <ProtectedRoute>
                    <ChatRoomPage
                    onJoinChatRoom={ChatService.joinChatRoom}
                    onSendMessage={ChatService.sendMessage}
                    />
                </ProtectedRoute>}/>
            <Route path="/mypage" element={
                        <ProtectedRoute>
                            <MyPage />
                        </ProtectedRoute>
                    }
                />
                {/* 404 페이지 */}
                <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

// <Routes>
{/*    <Route path="/" element={<MainPage />} />*/}
{/*    <Route path="/login" element={<LoginPage />} />*/}
{/*    <Route path="/signup" element={<SignupPage />} />*/}

{/*    <Route*/}
{/*        path="/chats"*/}
{/*        element={*/}
{/*            <ProtectedRoute>*/}
{/*                <ChatListPage />*/}
{/*            </ProtectedRoute>*/}
{/*        }*/}
{/*    />*/}
{/*    <Route*/}
{/*        path="/chat/:roomId"*/}
{/*        element={*/}
{/*            <ProtectedRoute>*/}
{/*                <ChatRoomPage />*/}
{/*            </ProtectedRoute>*/}
{/*        }*/}
{/*    />*/}
{/*    <Route*/}
{/*        path="/mypage"*/}
{/*        element={*/}
{/*            <ProtectedRoute>*/}
{/*                <MyPage />*/}
{/*            </ProtectedRoute>*/}
{/*        }*/}
{/*    />*/}
{/*    /!* 404 페이지 *!/*/}
{/*    <Route path="*" element={<Navigate to="/" replace />} />*/}
{/*</Routes>*/}

export default AppRouter