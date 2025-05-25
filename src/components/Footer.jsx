import styled from "styled-components"
import { MessageSquare, Facebook, Instagram, Twitter, Github } from "lucide-react"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path
                        fill="#f8f9fa"
                        fillOpacity="1"
                        d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                </svg>
            </FooterWave>

            <FooterContent>
                <FooterTop>
                    <CompanyInfo>
                        <LogoContainer>
                            <MessageSquare size={24} />
                            <LogoText>Chattr</LogoText>
                        </LogoContainer>
                        <CompanyDescription>
                            실시간 소통을 위한 최고의 채팅 플랫폼으로, 언제 어디서나 친구, 동료들과 쉽고 빠르게 대화할 수 있습니다.
                        </CompanyDescription>
                        <SocialLinks>
                            <SocialLink href="#" aria-label="Facebook">
                                <Facebook size={18} />
                            </SocialLink>
                            <SocialLink href="#" aria-label="Instagram">
                                <Instagram size={18} />
                            </SocialLink>
                            <SocialLink href="#" aria-label="Twitter">
                                <Twitter size={18} />
                            </SocialLink>
                            <SocialLink href="#" aria-label="Github">
                                <Github size={18} />
                            </SocialLink>
                        </SocialLinks>
                    </CompanyInfo>

                    <FooterLinks>
                        <LinkColumn>
                            <LinkHeader>서비스</LinkHeader>
                            <LinkItem href="#">기능</LinkItem>
                            <LinkItem href="#">요금제</LinkItem>
                            <LinkItem href="#">API</LinkItem>
                            <LinkItem href="#">파트너십</LinkItem>
                        </LinkColumn>

                        <LinkColumn>
                            <LinkHeader>회사</LinkHeader>
                            <LinkItem href="#">소개</LinkItem>
                            <LinkItem href="#">블로그</LinkItem>
                            <LinkItem href="#">채용</LinkItem>
                            <LinkItem href="#">연락처</LinkItem>
                        </LinkColumn>

                        <LinkColumn>
                            <LinkHeader>지원</LinkHeader>
                            <LinkItem href="#">도움말</LinkItem>
                            <LinkItem href="#">FAQ</LinkItem>
                            <LinkItem href="#">개인정보처리방침</LinkItem>
                            <LinkItem href="#">이용약관</LinkItem>
                        </LinkColumn>
                    </FooterLinks>
                </FooterTop>
            </FooterContent>

            <FooterBottom>
                <FooterBottomContent>
                    <Copyright>© 2024 Chattr. All rights reserved.</Copyright>
                    <CompanyDetails>
                        <CompanyDetailText>상호: (주)채트 | 대표자명: 김채트</CompanyDetailText>
                        <CompanyDetailText>
                            사업자등록번호: 000-00-00000 | 통신판매업신고번호: 제0000-서울마포-0000호
                        </CompanyDetailText>
                        <CompanyDetailText>주소: 서울특별시 마포구 월드컵북로 00, 2층</CompanyDetailText>
                    </CompanyDetails>
                </FooterBottomContent>
            </FooterBottom>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    position: relative;
    background-color: #111827;
    color: #f3f4f6;
`

const FooterWave = styled.div`
    position: absolute;
    top: -99px;
    left: 0;
    width: 100%;
    height: 100px;
    overflow: hidden;
    line-height: 0;

    svg {
        width: 100%;
        height: 100%;
    }
`

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 2rem;
`

const FooterTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
    }
`

const CompanyInfo = styled.div`
    flex: 2;
    max-width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 350px;
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    color: #4285f4;
`

const LogoText = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #4285f4, #34a853);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const CompanyDescription = styled.p`
    color: #9ca3af;
    line-height: 1.6;
    margin-bottom: 1.5rem;
`

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #1f2937;
    color: #e5e7eb;
    transition: all 0.2s;

    &:hover {
        background: linear-gradient(135deg, #4285f4, #34a853);
        color: white;
        transform: translateY(-3px);
    }
`

const FooterLinks = styled.div`
    flex: 3;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const LinkHeader = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    color: #f9fafb;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 30px;
        height: 2px;
        background: linear-gradient(90deg, #4285f4, #34a853);
    }
`

const LinkItem = styled.a`
    color: #9ca3af;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    transition: color 0.2s, transform 0.2s;
    display: inline-block;

    &:hover {
        color: #f9fafb;
        transform: translateX(3px);
    }
`

const FooterBottom = styled.div`
    background-color: #0f172a;
    padding: 1.5rem 0;
`

const FooterBottomContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

const Copyright = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
`

const CompanyDetails = styled.div`
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.6;
  text-align: left;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: right;
  }
`

const CompanyDetailText = styled.p`
  margin-bottom: 0.25rem;
`

export default Footer