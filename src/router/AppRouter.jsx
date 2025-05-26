import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from "../pages/MainPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import ChatListPage from "../pages/ChatListPage.jsx";
import * as ChatService from "../services/chat.js";
import ChatRoomPage from "../pages/ChatRoomPage.jsx";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login"  element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/chats" element={<ChatListPage
                onCreateChatRoom={ChatService.createChatRoom}
                onJoinChatRoom={ChatService.joinChatRoom}
            />}/>
            <Route path="/chat/:roomId" element={<ChatRoomPage
            onJoinChatRoom={ChatService.joinChatRoom}
            onSendMessage={ChatService.sendMessage}
            />}/>
        </Routes>
    )
}

export default AppRouter