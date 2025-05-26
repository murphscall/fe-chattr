"use client"

/**
 * 마이페이지 컴포넌트 - Context 사용 버전
 */
import { useState } from "react"
import styled from "styled-components"
import { useAuth } from "../context/AuthContext"
import Header from "../components/Header"
import { Camera, Save } from "lucide-react"

const MyPage = () => {
    const { user, logout } = useAuth()
    const [username, setUsername] = useState(user?.name || "")
    const [isEditing, setIsEditing] = useState(false)

    const handleSave = () => {
        // 실제 구현에서는 사용자 정보 업데이트 로직 추가
        setIsEditing(false)
        alert("프로필이 업데이트되었습니다.")
    }

    if (!user) {
        return <div>사용자 정보를 불러올 수 없습니다.</div>
    }

    return (
        <Container>
            <Header user={user} logout={logout} />
            <Content>
                <PageTitle>마이페이지</PageTitle>

                <ProfileCard>
                    <AvatarContainer>
                        <Avatar src={user.avatar} alt={user.name} />
                        <AvatarOverlay>
                            <Camera size={24} />
                        </AvatarOverlay>
                    </AvatarContainer>

                    <ProfileInfo>
                        {isEditing ? (
                            <UsernameInput type="text" value={username} onChange={(e) => setUsername(e.target.value)} autoFocus />
                        ) : (
                            <Username>{user.name}</Username>
                        )}
                        <UserId>ID: {user.userId}</UserId>
                    </ProfileInfo>

                    {isEditing ? (
                        <SaveButton onClick={handleSave}>
                            <Save size={18} />
                            저장
                        </SaveButton>
                    ) : (
                        <EditButton onClick={() => setIsEditing(true)}>프로필 수정</EditButton>
                    )}
                </ProfileCard>

                <SettingsSection>
                    <SectionTitle>설정</SectionTitle>

                    <SettingItem>
                        <SettingLabel>알림</SettingLabel>
                        <Toggle>
                            <ToggleInput type="checkbox" id="notifications" defaultChecked />
                            <ToggleSlider />
                        </Toggle>
                    </SettingItem>

                    <SettingItem>
                        <SettingLabel>다크 모드</SettingLabel>
                        <Toggle>
                            <ToggleInput type="checkbox" id="darkMode" />
                            <ToggleSlider />
                        </Toggle>
                    </SettingItem>

                    <SettingItem>
                        <SettingLabel>소리</SettingLabel>
                        <Toggle>
                            <ToggleInput type="checkbox" id="sound" defaultChecked />
                            <ToggleSlider />
                        </Toggle>
                    </SettingItem>
                </SettingsSection>

                <LogoutButton onClick={logout}>로그아웃</LogoutButton>
            </Content>
        </Container>
    )
}

// 스타일 컴포넌트는 기존과 동일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: 2rem;
`

const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`

const AvatarOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};
`

const ProfileInfo = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`

const Username = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const UsernameInput = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  text-align: center;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const UserId = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const EditButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}11;
  }
`

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
`

const SettingsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 1.5rem;
  margin-bottom: 2rem;
`

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`

const SettingLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.border};
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`

const LogoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.error}dd;
  }
`

export default MyPage
