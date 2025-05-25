import React from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext, useAuth} from "../context/AuthContext.jsx";
import Header from "../components/Header.jsx";
import styled  from "styled-components";
import Footer from "../components/Footer.jsx";
import {MessageSquare, Users, Zap, Shield, ArrowRight} from "lucide-react";

const MainPage = () => {
    const navigate = useNavigate();
    const {user , logout} = useAuth()

    const handleGetStarted = () => {
        if (user) {
            navigate("/chats")
        } else {
            navigate("/login")
        }
    }

    console.log(user)
    return (
       <Container>
            <Header user={user}  logout={logout}/>
               <HeroSection>
                   <HeroContent>
                       <HeroTitle>
                           실시간으로 소통하는 <HighlightText>새로운 방법</HighlightText>
                       </HeroTitle>
                       <HeroDescription>
                           언제 어디서나 친구, 동료들과 실시간으로 대화하세요.
                           <br />
                           간편한 채팅방 생성과 관리 기능으로 더 효율적인 소통이 가능합니다.
                       </HeroDescription>
                       <ButtonGroup>
                           <PrimaryButton onClick={handleGetStarted}>시작하기</PrimaryButton>
                           <SecondaryButton onClick={() => navigate("/features")}>
                               기능 살펴보기 <ArrowRight size={16} />
                           </SecondaryButton>
                       </ButtonGroup>

                       <DecorativeCircles>
                           <Circle size="lg" top="20%" left="10%" delay="0s" />
                           <Circle size="md" top="60%" left="20%" delay="0.2s" />
                           <Circle size="sm" top="30%" left="80%" delay="0.4s" />
                           <Circle size="md" top="70%" left="70%" delay="0.6s" />
                           <Circle size="sm" top="15%" left="60%" delay="0.8s" />
                       </DecorativeCircles>
                   </HeroContent>
               </HeroSection>
           <FeaturesSection>
               <SectionTitle>주요 기능</SectionTitle>
               <FeaturesGrid>
                   <FeatureCard>
                       <FeatureIconWrapper>
                           <MessageSquare size={28} />
                       </FeatureIconWrapper>
                       <FeatureTitle>실시간 채팅</FeatureTitle>
                       <FeatureDescription>지연 없는 빠른 메시지 전송으로 실시간 대화를 경험하세요.</FeatureDescription>
                   </FeatureCard>

                   <FeatureCard>
                       <FeatureIconWrapper>
                           <Users size={28} />
                       </FeatureIconWrapper>
                       <FeatureTitle>그룹 채팅</FeatureTitle>
                       <FeatureDescription>여러 사람과 함께 대화할 수 있는 그룹 채팅방을 만들어보세요.</FeatureDescription>
                   </FeatureCard>

                   <FeatureCard>
                       <FeatureIconWrapper>
                           <Zap size={28} />
                       </FeatureIconWrapper>
                       <FeatureTitle>빠른 접근성</FeatureTitle>
                       <FeatureDescription>언제 어디서나 모바일과 데스크톱에서 쉽게 접근할 수 있습니다.</FeatureDescription>
                   </FeatureCard>

                   <FeatureCard>
                       <FeatureIconWrapper>
                           <Shield size={28} />
                       </FeatureIconWrapper>
                       <FeatureTitle>보안 강화</FeatureTitle>
                       <FeatureDescription>안전한 대화를 위한 보안 기능으로 개인정보를 보호합니다.</FeatureDescription>
                   </FeatureCard>
               </FeaturesGrid>
           </FeaturesSection>

           <CTASection>
               <CTAContent>
                   <CTATitle>지금 바로 시작하세요</CTATitle>
                   <CTADescription>Chattr와 함께 더 효율적이고 즐거운 소통을 경험해보세요.</CTADescription>
                   <CTAButton onClick={handleGetStarted}>무료로 시작하기</CTAButton>
               </CTAContent>
           </CTASection>

           <Footer />
       </Container>
    )
}



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
  padding: 5rem 2rem 6rem; /* 상단 패딩 조정 */
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  margin-top: 0; /* 헤더와의 간격 제거 */
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

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`

const PrimaryButton = styled.button`
  padding: 1rem 2rem;
  background-color: #4285f4;
  color: white;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(66, 133, 244, 0.3);
  
  &:hover {
    background-color: #3367d6;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(66, 133, 244, 0.4);
  }
`

const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  color: #4285f4;
  border: 2px solid #4285f4;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: rgba(66, 133, 244, 0.1);
    transform: translateY(-2px);
  }
`

const DecorativeCircles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`


const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  background: linear-gradient(135deg, #4285f4, #34a853);
  width: ${({ size }) => (size === "sm" ? "50px" : size === "md" ? "100px" : "150px")};
  height: ${({ size }) => (size === "sm" ? "50px" : size === "md" ? "100px" : "150px")};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  animation: float 6s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4285f4, #34a853);
    border-radius: 2px;
  }
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
    grid-template-columns: repeat(4, 1fr);
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
  background: linear-gradient(135deg, #4285f4, #34a853);
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

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #4285f4, #34a853);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
  
  &::before {
    top: -100px;
    left: -100px;
  }
  
  &::after {
    bottom: -100px;
    right: -100px;
  }
`

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
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
export default MainPage