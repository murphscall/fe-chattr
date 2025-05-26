"use client"

/**
 * 로그인 페이지 컴포넌트 - Context 사용 버전
 */
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useAuth } from "../context/AuthContext"
import { MessageSquare, ChevronRight, Mail, Lock, AlertCircle } from "lucide-react"

const LoginPage = () => {
    const navigate = useNavigate()
    const { login, loading } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginMethod, setLoginMethod] = useState("email")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email.trim()) {
            setError("이메일을 입력해주세요.")
            return
        }

        if (!password.trim()) {
            setError("비밀번호를 입력해주세요.")
            return
        }

        setError("")

        try {
            const success = await login(email.trim(), password)
            if (success) {
                navigate("/")
            } else {
                setError("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.")
            }
        } catch (err) {
            setError("로그인 중 오류가 발생했습니다. 다시 시도해주세요.")
            console.error(err)
        }
    }

    const handleSocialLogin = (provider) => {
        // 소셜 로그인은 리다이렉트 방식으로 처리
        window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`
    }

    return (
        <Container>
            <LeftPanel>
                <BrandSection>
                    <LogoContainer>
                        <MessageSquare size={32} />
                        <LogoText>Chattr</LogoText>
                    </LogoContainer>
                    <Tagline>실시간으로 소통하는 새로운 방법</Tagline>
                </BrandSection>

                <FeatureList>
                    <FeatureItem>
                        <FeatureIcon>
                            <ChevronRight size={16} />
                        </FeatureIcon>
                        <FeatureText>간편한 채팅방 생성 및 관리</FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <ChevronRight size={16} />
                        </FeatureIcon>
                        <FeatureText>실시간 메시지 전송 및 알림</FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <ChevronRight size={16} />
                        </FeatureIcon>
                        <FeatureText>다양한 기기에서 동기화</FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <ChevronRight size={16} />
                        </FeatureIcon>
                        <FeatureText>안전한 대화 보안 시스템</FeatureText>
                    </FeatureItem>
                </FeatureList>
            </LeftPanel>

            <RightPanel>
                <LoginCard>
                    <LoginHeader>
                        <LoginTitle>로그인</LoginTitle>
                        <LoginSubtitle>계정에 로그인하고 대화를 시작하세요</LoginSubtitle>
                    </LoginHeader>

                    <LoginTabs>
                        <LoginTab isActive={loginMethod === "email"} onClick={() => setLoginMethod("email")}>
                            이메일 로그인
                        </LoginTab>
                        <LoginTab isActive={loginMethod === "social"} onClick={() => setLoginMethod("social")}>
                            소셜 로그인
                        </LoginTab>
                    </LoginTabs>

                    {loginMethod === "email" ? (
                        <Form onSubmit={handleSubmit}>
                            <InputGroup>
                                <InputLabel htmlFor="email">이메일</InputLabel>
                                <InputWrapper>
                                    <InputIcon>
                                        <Mail size={18} />
                                    </InputIcon>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            setError("")
                                        }}
                                        placeholder="이메일을 입력하세요"
                                        hasError={!!error}
                                    />
                                </InputWrapper>
                            </InputGroup>

                            <InputGroup>
                                <InputLabel htmlFor="password">비밀번호</InputLabel>
                                <InputWrapper>
                                    <InputIcon>
                                        <Lock size={18} />
                                    </InputIcon>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            setError("")
                                        }}
                                        placeholder="비밀번호를 입력하세요"
                                    />
                                </InputWrapper>
                            </InputGroup>

                            <ForgotPassword href="#">비밀번호를 잊으셨나요?</ForgotPassword>

                            {error && (
                                <ErrorMessage>
                                    <AlertCircle size={16} />
                                    <span>{error}</span>
                                </ErrorMessage>
                            )}

                            <LoginButton type="submit" disabled={loading}>
                                {loading ? "로그인 중..." : "로그인"}
                            </LoginButton>
                        </Form>
                    ) : (
                        <SocialLoginContainer>
                            <SocialButton onClick={() => handleSocialLogin("kakao")} provider="kakao">
                                <SocialIcon src="/icon/kakao-svgrepo-com.svg" alt="Kakao" />
                                카카오로 로그인
                            </SocialButton>

                            <SocialButton onClick={() => handleSocialLogin("google")} provider="google">
                                <SocialIcon src="/icon/google-logo.png" alt="Google" />
                                구글로 로그인
                            </SocialButton>
                        </SocialLoginContainer>
                    )}

                    <SignupPrompt>
                        계정이 없으신가요? <SignupLink onClick={() => navigate("/signup")}>회원가입</SignupLink>
                    </SignupPrompt>
                </LoginCard>
            </RightPanel>
        </Container>
    )
}

// 스타일 컴포넌트는 기존과 동일하므로 생략...
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const LeftPanel = styled.div`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    padding: 3rem;
    background: linear-gradient(135deg, #4285f4, #34a853);
    color: white;
  }
`

const BrandSection = styled.div`
  margin-bottom: 4rem;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

const LogoText = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 0.75rem;
`

const Tagline = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
`

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 1rem;
`

const FeatureText = styled.span`
  opacity: 0.9;
`

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const LoginCard = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const LoginTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`

const LoginSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const LoginTabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const LoginTab = styled.button`
  flex: 1;
  padding: 0.75rem 0;
  font-size: 0.95rem;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  color: ${({ isActive, theme }) => (isActive ? "#4285f4" : theme.colors.textLight)};
  border-bottom: 2px solid ${({ isActive }) => (isActive ? "#4285f4" : "transparent")};
  transition: all 0.2s;
  
  &:hover {
    color: ${({ isActive, theme }) => (isActive ? "#4285f4" : theme.colors.text)};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`

const InputWrapper = styled.div`
  position: relative;
`

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
`

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid ${({ hasError, theme }) => (hasError ? "#ef4444" : theme.colors.border)};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "#ef4444" : "#4285f4")};
    box-shadow: 0 0 0 3px ${({ hasError }) => (hasError ? "rgba(239, 68, 68, 0.15)" : "rgba(66, 133, 244, 0.15)")};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.6;
  }
`

const ForgotPassword = styled.a`
  font-size: 0.9rem;
  color: #4285f4;
  text-align: right;
  margin-top: -0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: #fee2e2;
  border-radius: 8px;
  color: #ef4444;
  font-size: 0.9rem;
`

const LoginButton = styled.button`
  padding: 0.875rem;
  background-color: #4285f4;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  
  &:hover:not(:disabled) {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  
  ${({ provider }) => {
    if (provider === "kakao") {
        return `
        background-color: #FEE500;
        color: #000000;
        
        &:hover {
          background-color: #F6DC00;
        }
      `
    } else if (provider === "google") {
        return `
        background-color: white;
        color: #4285F4;
        border: 1px solid #DADCE0;
        
        &:hover {
          background-color: #F8FAFF;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
      `
    }
}}
`

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`

const SignupPrompt = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const SignupLink = styled.a`
  color: #4285f4;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

export default LoginPage
