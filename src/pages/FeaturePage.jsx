"use client"

/**
 * 기능 소개 페이지 컴포넌트
 */
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useAuth } from "../context/AuthContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
    MessageSquare,
    Users,
    Bell,
    Shield,
    Smartphone,
    FileText,
    Search,
    Zap,
    Clock,
    Smile,
    Globe,
    Lock,
    ChevronRight,
    ChevronDown
} from "lucide-react"

const FeaturesPage = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    const handleTryNow = () => {
        if (user) {
            navigate("/chats")
        } else {
            navigate("/signup")
        }
    }

    return (
        <Container>
            <Header user={user} onLogout={logout} />

            <HeroSection>
                <HeroContent>
                    <HeroTitle>
                        Chattr의 <HighlightText>강력한 기능</HighlightText>
                    </HeroTitle>
                    <HeroDescription>
                        실시간 소통을 위한 최고의 채팅 플랫폼, Chattr의 다양한 기능을 소개합니다.
                        <br />
                        언제 어디서나 쉽고 빠르게 대화하며 소통하세요.
                    </HeroDescription>
                    <ScrollArrow/>


                </HeroContent>
            </HeroSection>

            <FeaturesSection>
                <SectionTitle>주요 기능</SectionTitle>
                <SectionDescription>
                    Chattr는 사용자 경험을 최우선으로 생각하여 설계된 다양한 기능을 제공합니다.
                </SectionDescription>

                <FeaturesGrid>
                    <FeatureCard>
                        <FeatureIconWrapper color="#4285f4">
                            <MessageSquare size={28} />
                        </FeatureIconWrapper>
                        <FeatureTitle>실시간 채팅</FeatureTitle>
                        <FeatureDescription>
                            WebSocket 기술을 활용한 실시간 메시지 전송으로 지연 없는 대화를 경험하세요.
                        </FeatureDescription>
                    </FeatureCard>

                    <FeatureCard>
                        <FeatureIconWrapper color="#34a853">
                            <Users size={28} />
                        </FeatureIconWrapper>
                        <FeatureTitle>오픈 채팅</FeatureTitle>
                        <FeatureDescription>
                            다양한 주제별 그룹 채팅방을 생성하고 관리할 수 있습니다. 마음이 맞는 사람들과 함께 대화를 나누세요.
                        </FeatureDescription>
                    </FeatureCard>

                    <FeatureCard>
                        <FeatureIconWrapper color="#fbbc05">
                            <Bell size={28} />
                        </FeatureIconWrapper>
                        <FeatureTitle>알림 시스템</FeatureTitle>
                        <FeatureDescription>
                            중요한 메시지를 놓치지 않도록 실시간 알림 기능을 제공합니다. 알림 설정을 개인화하여 필요한 정보만
                            받아보세요.
                        </FeatureDescription>
                    </FeatureCard>

                    <FeatureCard>
                        <FeatureIconWrapper color="#ea4335">
                            <Shield size={28} />
                        </FeatureIconWrapper>
                        <FeatureTitle>보안 강화</FeatureTitle>
                        <FeatureDescription>
                            엔드투엔드 암호화로 대화 내용을 안전하게 보호합니다. 개인정보 보호를 위한 다양한 보안 기능을 제공합니다.
                        </FeatureDescription>
                    </FeatureCard>

                    <FeatureCard>
                        <FeatureIconWrapper color="#673ab7">
                            <Smartphone size={28} />
                        </FeatureIconWrapper>
                        <FeatureTitle>모바일 지원</FeatureTitle>
                        <FeatureDescription>
                            반응형 디자인으로 모바일, 태블릿, 데스크톱 등 다양한 기기에서 동일한 사용자 경험을 제공합니다.
                        </FeatureDescription>
                    </FeatureCard>

                    <FeatureCard>
                        <FeatureIconWrapper color="#ff9800">
                            <FileText size={28} />
                        </FeatureIconWrapper>
                        <FeatureTitle>파일 공유</FeatureTitle>
                        <FeatureDescription>
                            이미지, 문서, 동영상 등 다양한 형식의 파일을 쉽게 공유할 수 있습니다. 대용량 파일도 문제없이 전송
                            가능합니다.
                        </FeatureDescription>
                    </FeatureCard>
                </FeaturesGrid>
            </FeaturesSection>

            <DetailedFeaturesSection>
                <SectionTitle>상세 기능 소개</SectionTitle>

                <DetailedFeatureList>
                    <DetailedFeatureItem reversed>
                        <DetailedFeatureContent>
                            <DetailedFeatureTitle>소셜 로그인</DetailedFeatureTitle>
                            <DetailedFeatureDescription>
                                개인 정보 입력 없이 소셜 로그인을 통해 빠르게 채팅에 참여해보세요.
                                <FeaturePointList>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>일반 로그인</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>카카오 로그인</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>구글 로그인</span>
                                    </FeaturePoint>
                                </FeaturePointList>
                            </DetailedFeatureDescription>
                        </DetailedFeatureContent>
                        <DetailedFeatureImage>
                            <FeatureImageWrapper>
                                <FeatureImage src="/images/chat-login.PNG" alt="채팅방 관리" />
                            </FeatureImageWrapper>
                        </DetailedFeatureImage>
                    </DetailedFeatureItem>

                    <DetailedFeatureItem>
                        <DetailedFeatureContent>
                            <DetailedFeatureTitle>실시간 채팅 시스템</DetailedFeatureTitle>
                            <DetailedFeatureDescription>
                                Chattr의 핵심 기능인 실시간 채팅 시스템은 WebSocket 기술을 기반으로 구축되어 있습니다. 메시지 전송 시
                                즉각적인 응답과 함께 읽음 확인, 타이핑 표시 등 다양한 상태 정보를 제공합니다.
                                <FeaturePointList>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>지연 없는 실시간 메시지 전송</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>메시지 읽음 확인 및 타이핑 표시</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>오프라인 상태에서도 메시지 수신 가능</span>
                                    </FeaturePoint>
                                </FeaturePointList>d
                            </DetailedFeatureDescription>
                        </DetailedFeatureContent>
                        <DetailedFeatureImage>
                            <FeatureImageWrapper>
                                <FeatureImage src="/images/chat-room.png" alt="실시간 채팅" />
                            </FeatureImageWrapper>
                        </DetailedFeatureImage>
                    </DetailedFeatureItem>

                    <DetailedFeatureItem reversed>
                        <DetailedFeatureContent>
                            <DetailedFeatureTitle>다양한 채팅방 관리</DetailedFeatureTitle>
                            <DetailedFeatureDescription>
                                주제별, 목적별로 다양한 채팅방을 생성하고 관리할 수 있습니다. 공개 채팅방과 비공개 채팅방을 구분하여
                                운영할 수 있으며, 채팅방별 설정을 세부적으로 조정할 수 있습니다.
                                <FeaturePointList>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>주제별 채팅방 생성 및 관리</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>공개/비공개 채팅방 설정</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>채팅방 참여자 관리 및 권한 설정</span>
                                    </FeaturePoint>
                                </FeaturePointList>
                            </DetailedFeatureDescription>
                        </DetailedFeatureContent>
                        <DetailedFeatureImage>
                            <FeatureImageWrapper>
                                <FeatureImage src="/images/chat-create.png" alt="채팅방 관리" />
                            </FeatureImageWrapper>
                        </DetailedFeatureImage>
                    </DetailedFeatureItem>

                    <DetailedFeatureItem>
                        <DetailedFeatureContent>
                            <DetailedFeatureTitle>채팅 목록 기능</DetailedFeatureTitle>
                            <DetailedFeatureDescription>
                                원하는 카테고리에 맞는 채팅방을 분류별로 제공하고 참여중인 방과 인기방, 자신이 만든 채팅방을
                                조회 할 수 있습니다.
                                <FeaturePointList>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>채팅방 제목 검색</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>채팅방 카테고리 별 필터링</span>
                                    </FeaturePoint>
                                    <FeaturePoint>
                                        <ChevronRight size={16} />
                                        <span>인기 채팅방 표시</span>
                                    </FeaturePoint>
                                </FeaturePointList>
                            </DetailedFeatureDescription>
                        </DetailedFeatureContent>
                        <DetailedFeatureImage>
                            <FeatureImageWrapper>
                                <FeatureImage src="/images/chat-list.png" alt="고급 검색 기능" />
                            </FeatureImageWrapper>
                        </DetailedFeatureImage>
                    </DetailedFeatureItem>
                </DetailedFeatureList>
            </DetailedFeaturesSection>

            <MoreFeaturesSection>
                <SectionTitle>더 많은 기능</SectionTitle>
                <MoreFeaturesGrid>
                    <SmallFeatureCard>
                        <SmallFeatureIcon>
                            <Search size={20} />
                        </SmallFeatureIcon>
                        <SmallFeatureTitle>스마트 검색</SmallFeatureTitle>
                        <SmallFeatureDescription>대화 내용을 키워드, 날짜별로 검색</SmallFeatureDescription>
                    </SmallFeatureCard>

                    <SmallFeatureCard>
                        <SmallFeatureIcon>
                            <Zap size={20} />
                        </SmallFeatureIcon>
                        <SmallFeatureTitle>빠른 응답</SmallFeatureTitle>
                        <SmallFeatureDescription>자주 사용하는 응답을 빠르게 전송</SmallFeatureDescription>
                    </SmallFeatureCard>

                    <SmallFeatureCard>
                        <SmallFeatureIcon>
                            <Clock size={20} />
                        </SmallFeatureIcon>
                        <SmallFeatureTitle>메시지 예약</SmallFeatureTitle>
                        <SmallFeatureDescription>원하는 시간에 메시지 자동 전송</SmallFeatureDescription>
                    </SmallFeatureCard>

                    <SmallFeatureCard>
                        <SmallFeatureIcon>
                            <Smile size={20} />
                        </SmallFeatureIcon>
                        <SmallFeatureTitle>이모티콘 & GIF</SmallFeatureTitle>
                        <SmallFeatureDescription>다양한 이모티콘과 GIF로 감정 표현</SmallFeatureDescription>
                    </SmallFeatureCard>

                    <SmallFeatureCard>
                        <SmallFeatureIcon>
                            <Globe size={20} />
                        </SmallFeatureIcon>
                        <SmallFeatureTitle>다국어 지원</SmallFeatureTitle>
                        <SmallFeatureDescription>다양한 언어로 인터페이스 제공</SmallFeatureDescription>
                    </SmallFeatureCard>

                    <SmallFeatureCard>
                        <SmallFeatureIcon>
                            <Lock size={20} />
                        </SmallFeatureIcon>
                        <SmallFeatureTitle>비밀 채팅</SmallFeatureTitle>
                        <SmallFeatureDescription>자동 삭제 및 암호화된 비밀 대화</SmallFeatureDescription>
                    </SmallFeatureCard>
                </MoreFeaturesGrid>
            </MoreFeaturesSection>

            <CTASection>
                <CTAContent>
                    <CTATitle>지금 바로 Chattr를 경험해보세요</CTATitle>
                    <CTADescription>
                        실시간 소통의 새로운 경험, Chattr와 함께 시작하세요.
                        <br />
                        무료로 가입하고 다양한 기능을 체험해보세요.
                    </CTADescription>
                    <CTAButton onClick={handleTryNow}>{user ? "채팅 시작하기" : "무료로 시작하기"}</CTAButton>
                </CTAContent>
            </CTASection>

            <Footer />
        </Container>
    )
}

const ScrollArrow = styled(ChevronDown)`
    width: 32px;
    height: 32px;
  animation: floatY 1.2s ease-in-out infinite;
  color: #aaa;

  @keyframes floatY {
    0% { transform: translateY(0); }
    50% { transform: translateY(6px); }
    100% { transform: translateY(0); }
  }
`

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 2;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }
`

const HighlightText = styled.span`
  color: #4285f4;
  background: linear-gradient(90deg, #4285f4, #34a853);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeroDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const SectionDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`

const FeatureIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ color }) => color || "#4285f4"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
`

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
`

const DetailedFeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`

const DetailedFeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 1200px;
  margin: 3rem auto 0;
`

const DetailedFeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
    align-items: center;
  }
`

const DetailedFeatureContent = styled.div`
  flex: 1;
`

const DetailedFeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const DetailedFeatureDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
`

const FeaturePointList = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const FeaturePoint = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  
  svg {
    color: #4285f4;
    flex-shrink: 0;
  }
`

const DetailedFeatureImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const FeatureImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const MoreFeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`

const MoreFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 3rem auto 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SmallFeatureCard = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    background-color: #f0f0f0;
  }
`

const SmallFeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
`

const SmallFeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const SmallFeatureDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #4285f4, #34a853);
  color: white;
  text-align: center;
`

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
`

const CTAButton = styled.button`
  padding: 1rem 2.5rem;
  background-color: white;
  color: #4285f4;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`

export default FeaturesPage
