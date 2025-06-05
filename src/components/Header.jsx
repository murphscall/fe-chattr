"use client"

import {useState, useEffect} from "react"
import { useNavigate, useLocation } from "react-router-dom"
import styled from "styled-components"
import { LogOut, MessageSquare, UserIcon, Menu, X } from "lucide-react"


const Header = ({user , logout}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // 초기 스크롤 상태 설정
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const $isHomePage = location.pathname === "/"

  return (
      <HeaderContainer $isScrolled={isScrolled} $isHomePage={$isHomePage}>
        <HeaderContent>
          <LogoContainer onClick={() => navigate("/")}>
            <LogoIcon>
              <MessageSquare size={24} />
            </LogoIcon>
            <LogoText>Chattr</LogoText>
          </LogoContainer>

          <DesktopNav>
            <NavItem $isActive={location.pathname === "/"} onClick={() => navigate("/")}>
              홈
            </NavItem>
            <NavItem $isActive={location.pathname === "/feature"} onClick={() => navigate("/feature")}>
              기능
            </NavItem>
            <NavItem $isActive={location.pathname === "/about"} onClick={() => navigate("/about")}>
              소개
            </NavItem>
          </DesktopNav>

          <DesktopActions>
            {user ? (
                <>
                  <UserProfile onClick={() => navigate("/mypage")}>
                    <UserAvatar src={user.avatar} alt={user.name} />
                    <UserName>{user.name}</UserName>
                  </UserProfile>
                  <ActionButton onClick={() => navigate("/chats")}>
                    <MessageSquare size={18} />
                    <span>채팅</span>
                  </ActionButton>
                  <ActionButton onClick={logout} isLogout>
                    <LogOut size={18} />
                    <span>로그아웃</span>
                  </ActionButton>
                </>
            ) : (
                <>
                  <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
                  <SignupButton onClick={() => navigate("/signup")}>회원가입</SignupButton>
                </>
            )}
          </DesktopActions>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </HeaderContent>

        {isMobileMenuOpen && (
            <MobileMenu>
              <MobileNavItem
                  onClick={() => {
                    navigate("/")
                    setIsMobileMenuOpen(false)
                  }}
              >
                홈
              </MobileNavItem>
              <MobileNavItem
                  onClick={() => {
                    navigate("/features")
                    setIsMobileMenuOpen(false)
                  }}
              >
                기능
              </MobileNavItem>
              <MobileNavItem
                  onClick={() => {
                    navigate("/pricing")
                    setIsMobileMenuOpen(false)
                  }}
              >
                요금제
              </MobileNavItem>
              <MobileNavItem
                  onClick={() => {
                    navigate("/about")
                    setIsMobileMenuOpen(false)
                  }}
              >
                소개
              </MobileNavItem>

              <MobileDivider />

              {user ? (
                  <>
                    <MobileUserProfile>
                      <UserAvatar src={user.avatar} alt={user.name} />
                      <UserName>{user.name}</UserName>
                    </MobileUserProfile>
                    <MobileNavItem
                        onClick={() => {
                          navigate("/mypage")
                          setIsMobileMenuOpen(false)
                        }}
                    >
                      <UserIcon size={18} />
                      <span>마이페이지</span>
                    </MobileNavItem>
                    <MobileNavItem
                        onClick={() => {
                          navigate("/chats")
                          setIsMobileMenuOpen(false)
                        }}
                    >
                      <MessageSquare size={18} />
                      <span>채팅</span>
                    </MobileNavItem>
                    <MobileNavItem
                        onClick={() => {
                          logout()
                          setIsMobileMenuOpen(false)
                        }}
                    >
                      <LogOut size={18} />
                      <span>로그아웃</span>
                    </MobileNavItem>
                  </>
              ) : (
                  <>
                    <MobileButton
                        onClick={() => {
                          navigate("/login")
                          setIsMobileMenuOpen(false)
                        }}
                    >
                      로그인
                    </MobileButton>
                    <MobileButton
                        primary
                        onClick={() => {
                          navigate("/signup")
                          setIsMobileMenuOpen(false)
                        }}
                    >
                      회원가입
                    </MobileButton>
                  </>
              )}
            </MobileMenu>
        )}
      </HeaderContainer>
  )
}


const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ $isScrolled, $isHomePage, theme }) =>
    $isScrolled ? "rgba(255, 255, 255, 0.95)" : $isHomePage ? "transparent" : theme.colors.surface};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? "blur(8px)" : "none")};
  box-shadow: ${({ $isScrolled, theme }) => ($isScrolled ? theme.shadows.small : "none")};
  transition: all 0.3s ease;
  height: 64px; /* 헤더 높이 고정 */
  display: flex;
  align-items: center;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4285f4;
  margin-right: 0.5rem;
`

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4285f4, #34a853);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`



const NavItem = styled.button`
  font-size: 0.95rem;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "500")};
  color: ${({ $isActive, theme }) => ($isActive ? "#4285f4" : theme.colors.text)};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;
    background-color: #4285f4;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const DesktopActions = styled.div`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`

const UserName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ isLogout }) => (isLogout ? "#f43f5e" : "#4285f4")};
  background-color: ${({ isLogout }) => (isLogout ? "rgba(244, 63, 94, 0.1)" : "rgba(66, 133, 244, 0.1)")};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ isLogout }) => (isLogout ? "rgba(244, 63, 94, 0.2)" : "rgba(66, 133, 244, 0.2)")};
  }
`

const LoginButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4285f4;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(66, 133, 244, 0.1);
  }
`

const SignupButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  background-color: #4285f4;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const MobileNavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`

const MobileDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  margin: 0.5rem 0;
`

const MobileUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const MobileButton = styled.button`
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: ${({ primary }) => (primary ? "white" : "#4285f4")};
  background-color: ${({ primary }) => (primary ? "#4285f4" : "transparent")};
  border: ${({ primary }) => (primary ? "none" : "1px solid #4285f4")};
`

export default Header
