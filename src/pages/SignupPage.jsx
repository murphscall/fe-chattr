
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import {
    MessageSquare,
    ChevronRight,
    Mail,
    Lock,
    User,
    AlertCircle,
    Check,
    Phone,
    Clock,
    CheckCircle,
} from "lucide-react"
import {useAuth} from "../context/AuthContext.jsx";



const SignupPage = () => {
    const navigate = useNavigate()
    const {register} = useAuth()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        verificationCode: "", // 인증 코드 필드 추가
    })
    const [errors, setErrors] = useState({})
    const [passwordStrength, setPasswordStrength] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const verificationCodeRef = useRef(null)
    const [signupSuccess, setSignupSuccess] = useState(false)

    // 타이머 관련 상태와 함수 추가 (useState 임포트 아래에 추가)
    const [timeRemaining, setTimeRemaining] = useState(null)
    const [timerId, setTimerId] = useState(null)

    // 이메일 인증 관련 상태
    const [emailVerificationStatus, setEmailVerificationStatus] = useState("idle")
    const [isRequestingVerification, setIsRequestingVerification] = useState(false)
    const [isVerifyingCode, setIsVerifyingCode] = useState(false)
    const [verificationMessage, setVerificationMessage] = useState("")

    // 전화번호 자동 포맷팅 함수 추가
    const formatPhoneNumber = (value) => {
        // 숫자만 추출
        const numbers = value.replace(/[^\d]/g, "")

        // 포맷팅
        if (numbers.length <= 3) {
            return numbers
        } else if (numbers.length <= 7) {
            return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
        } else {
            return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        // 전화번호 포맷팅 적용
        if (name === "phone") {
            setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }))
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }))
        }

        // 에러 메시지 초기화
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }

        // 비밀번호 강도 체크
        if (name === "password") {
            checkPasswordStrength(value)
        }

        // 이메일이 변경되면 인증 상태 초기화
        if (name === "email" && emailVerificationStatus !== "idle") {
            setEmailVerificationStatus("idle")
            setVerificationMessage("")
        }
    }

    const checkPasswordStrength = (password) => {
        if (!password) {
            setPasswordStrength(null)
            return
        }

        const hasLetter = /[a-zA-Z]/.test(password)
        const hasNumber = /[0-9]/.test(password)
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

        if (password.length < 6) {
            setPasswordStrength("weak")
        } else if (password.length >= 8 && hasLetter && hasNumber && hasSpecial) {
            setPasswordStrength("strong")
        } else {
            setPasswordStrength("medium")
        }
    }

    // 타이머 시작 함수 추가 (handleRequestVerification 함수 위에 추가)
    const startTimer = () => {
        // 30분 = 1800초
        setTimeRemaining(1800)

        // 이전 타이머가 있다면 제거
        if (timerId) clearInterval(timerId)

        // 새 타이머 시작
        const id = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev === null || prev <= 1) {
                    clearInterval(id)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        setTimerId(id)
    }

    // 타이머 포맷 함수 추가 (startTimer 함수 아래에 추가)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    // 이메일 인증 요청 함수
    const handleRequestVerification = async () => {
        if (!formData.email) {
            setErrors((prev) => ({ ...prev, email: "이메일을 입력해주세요." }))
            return
        }

        if (!/^[a-zA-Z0-9_+&*-]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-z]{2,10}$/.test(formData.email)) {
            setErrors((prev) => ({ ...prev, email: "이메일 형식을 올바르게 입력해주세요." }))
            return
        }

        try {
            setIsRequestingVerification(true)
            setVerificationMessage("")

            // 서버에 인증 코드 요청 API 호출
            const response = await fetch("http://localhost:8080/api/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: formData.email }),
            })

            const data = await response.json()

            // handleRequestVerification 함수 내에서 타이머 시작 코드 추가 (성공 응답 처리 부분에)
            if (data.status === "success") {
                setEmailVerificationStatus("requested")
                setVerificationMessage("인증 코드가 이메일로 전송되었습니다. 이메일을 확인해주세요.")
                startTimer() // 타이머 시작

                // 인증 코드 입력 필드로 포커스 이동
                setTimeout(() => {
                    if (verificationCodeRef.current) {
                        verificationCodeRef.current.focus()
                    }
                }, 100)
            } else {
                setVerificationMessage(data.message || "인증 코드 전송에 실패했습니다. 다시 시도해주세요.")
            }
        } catch (error) {
            console.error("인증 코드 요청 오류:", error)
            setVerificationMessage("인증 코드 요청 중 오류가 발생했습니다. 다시 시도해주세요.")
        } finally {
            setIsRequestingVerification(false)
        }
    }

    // 인증 코드 확인 함수
    const handleVerifyCode = async () => {
        if (!formData.verificationCode) {
            setErrors((prev) => ({ ...prev, verificationCode: "인증 코드를 입력해주세요." }))
            return
        }

        try {
            setIsVerifyingCode(true)
            setVerificationMessage("")

            // 서버에 인증 코드 확인 API 호출
            const response = await fetch("http://localhost:8080/api/email/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    code: formData.verificationCode,
                }),
            })

            const data = await response.json()

            if (data.status === "success") {
                setEmailVerificationStatus("verified")
                setVerificationMessage("이메일 인증이 완료되었습니다.")
            } else {
                setVerificationMessage(data.message || "인증 코드가 올바르지 않습니다. 다시 확인해주세요.")
            }
        } catch (error) {
            console.error("인증 코드 확인 오류:", error)
            setVerificationMessage("인증 코드 확인 중 오류가 발생했습니다. 다시 시도해주세요.")
        } finally {
            setIsVerifyingCode(false)
        }
    }

    const validateForm = () => {
        const newErrors = {}

        // 이름 검증: 한글 3~5자
        if (!formData.name.trim()) {
            newErrors.name = "이름을 입력해주세요."
        } else if (!/^[가-힣]{3,5}$/.test(formData.name)) {
            newErrors.name = "이름은 한글 3~5자로 입력해주세요."
        }

        // 이메일 검증
        if (!formData.email.trim()) {
            newErrors.email = "이메일을 입력해주세요."
        } else if (!/^[a-zA-Z0-9_+&*-]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-z]{2,10}$/.test(formData.email)) {
            newErrors.email = "이메일 형식을 올바르게 입력해주세요."
        }

        // 이메일 인증 확인
        if (emailVerificationStatus !== "verified") {
            newErrors.email = "이메일 인증이 필요합니다."
        }

        // 비밀번호 검증: 8~20자 영문 대소문자, 숫자, 특수문자 포함
        if (!formData.password) {
            newErrors.password = "비밀번호를 입력해주세요."
        } else if (!/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/.test(formData.password)) {
            newErrors.password = "비밀번호는 8~20자 영문 소문자, 숫자, 특수문자를 포함해야 합니다."
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "비밀번호가 일치하지 않습니다."
        }

        // 전화번호 검증: 000-0000-0000 형식
        if (!formData.phone) {
            newErrors.phone = "전화번호를 입력해주세요."
        } else if (!/^\d{3}-\d{3,4}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = "전화번호 형식을 올바르게 입력해주세요. (예: 010-1234-5678)"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()) {
            try {
                setIsSubmitting(true)

                // 회원가입 요청 (자동 로그인 없음)
                const success = await register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone,
                })

                if (success) {
                    // 회원가입 성공 시 성공 화면으로 전환
                    setSignupSuccess(true)
                } else {
                    setErrors({
                        form: "회원가입에 실패했습니다. 다시 시도해주세요.",
                    })
                }
            } catch (error) {
                console.error("회원가입 오류:", error)
                setErrors({
                    form: "회원가입 중 오류가 발생했습니다.",
                })
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    // 로그인 페이지로 이동
    const handleGoToLogin = () => {
        navigate("/login")
    }

    // 컴포넌트 언마운트 시 타이머 정리 (useEffect 추가)
    useEffect(() => {
        return () => {
            if (timerId) clearInterval(timerId)
        }
    }, [timerId])

    // 회원가입 성공 화면
    if (signupSuccess) {
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
                    <SuccessCard>
                        <SuccessIcon>
                            <CheckCircle size={80} />
                        </SuccessIcon>
                        <SuccessTitle>회원가입 완료!</SuccessTitle>
                        <SuccessMessage>
                            <strong>{formData.name}</strong>님, 회원가입이 성공적으로 완료되었습니다.
                            <br />
                            이제 로그인하여 Chattr의 다양한 기능을 이용해보세요.
                        </SuccessMessage>
                        <LoginButton onClick={handleGoToLogin}>로그인하기</LoginButton>
                        <HomeLink onClick={() => navigate("/")}>홈으로 돌아가기</HomeLink>
                    </SuccessCard>
                </RightPanel>
            </Container>
        )
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
                <SignupCard>
                    <SignupHeader>
                        <SignupTitle>회원가입</SignupTitle>
                        <SignupSubtitle>계정을 만들고 대화를 시작하세요</SignupSubtitle>
                    </SignupHeader>

                    <Form onSubmit={handleSubmit}>
                        {/* 이름 입력 필드 추가 */}
                        <InputGroup>
                            <InputLabel htmlFor="name">이름</InputLabel>
                            <InputWrapper>
                                <InputIcon>
                                    <User size={18} />
                                </InputIcon>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="이름을 입력하세요 (한글 3~5자)"
                                    $hasError={!!errors.name}
                                />
                            </InputWrapper>
                            {errors.name && (
                                <ErrorMessage>
                                    <AlertCircle size={16} />
                                    <span>{errors.name}</span>
                                </ErrorMessage>
                            )}
                        </InputGroup>

                        {/* 이메일 입력 필드와 인증 버튼 부분 수정 (InputGroup 내부) */}
                        <InputGroup>
                            <InputLabel htmlFor="email">이메일</InputLabel>
                            <EmailInputWrapper>
                                <InputIcon>
                                    <Mail size={18} />
                                </InputIcon>
                                <EmailInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="이메일을 입력하세요"
                                    $hasError={!!errors.email}
                                    disabled={emailVerificationStatus === "verified"}
                                />
                                <VerificationButton
                                    type="button"
                                    onClick={handleRequestVerification}
                                    disabled={isRequestingVerification || emailVerificationStatus === "verified" || !formData.email}
                                >
                                    {isRequestingVerification
                                        ? "요청 중..."
                                        : emailVerificationStatus === "verified"
                                            ? "인증 완료"
                                            : "인증 요청"}
                                </VerificationButton>
                            </EmailInputWrapper>
                            {errors.email && (
                                <ErrorMessage>
                                    <AlertCircle size={16} />
                                    <span>{errors.email}</span>
                                </ErrorMessage>
                            )}
                            {verificationMessage && (
                                <VerificationMessage isSuccess={emailVerificationStatus === "verified"}>
                                    {emailVerificationStatus === "verified" ? <Check size={16} /> : <Clock size={16} />}
                                    <span>{verificationMessage}</span>
                                    {timeRemaining !== null && timeRemaining > 0 && emailVerificationStatus === "requested" && (
                                        <TimerText>남은 시간: {formatTime(timeRemaining)}</TimerText>
                                    )}
                                    {timeRemaining === 0 && emailVerificationStatus === "requested" && (
                                        <ExpiredText>인증 시간이 만료되었습니다. 다시 요청해주세요.</ExpiredText>
                                    )}
                                </VerificationMessage>
                            )}
                        </InputGroup>

                        {/* 인증 코드 입력 필드 부분 수정 (조건부 렌더링) */}
                        {emailVerificationStatus === "requested" && (
                            <InputGroup>
                                <InputLabel htmlFor="verificationCode">인증 코드</InputLabel>
                                <VerificationCodeWrapper>
                                    <InputIcon>
                                        <Lock size={18} />
                                    </InputIcon>
                                    <VerificationCodeInput
                                        id="verificationCode"
                                        name="verificationCode"
                                        type="text"
                                        value={formData.verificationCode}
                                        onChange={handleChange}
                                        placeholder="이메일로 받은 인증 코드를 입력하세요"
                                        $hasError={!!errors.verificationCode}
                                        disabled={timeRemaining === 0}
                                        ref={verificationCodeRef}
                                    />
                                    <VerifyButton
                                        type="button"
                                        onClick={handleVerifyCode}
                                        disabled={isVerifyingCode || !formData.verificationCode || timeRemaining === 0}
                                    >
                                        {isVerifyingCode ? "확인 중..." : "인증완료"}
                                    </VerifyButton>
                                </VerificationCodeWrapper>
                                {errors.verificationCode && (
                                    <ErrorMessage>
                                        <AlertCircle size={16} />
                                        <span>{errors.verificationCode}</span>
                                    </ErrorMessage>
                                )}
                                {timeRemaining === 0 && (
                                    <ErrorMessage>
                                        <AlertCircle size={16} />
                                        <span>인증 시간이 만료되었습니다. 다시 인증 요청을 해주세요.</span>
                                    </ErrorMessage>
                                )}
                            </InputGroup>
                        )}

                        <InputGroup>
                            <InputLabel htmlFor="phone">전화번호</InputLabel>
                            <InputWrapper>
                                <InputIcon>
                                    <Phone size={18} />
                                </InputIcon>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="전화번호를 입력하세요 (예: 010-1234-5678)"
                                    $hasError={!!errors.phone}
                                />
                            </InputWrapper>
                            {errors.phone && (
                                <ErrorMessage>
                                    <AlertCircle size={16} />
                                    <span>{errors.phone}</span>
                                </ErrorMessage>
                            )}
                        </InputGroup>

                        <InputGroup>
                            <InputLabel htmlFor="password">비밀번호</InputLabel>
                            <InputWrapper>
                                <InputIcon>
                                    <Lock size={18} />
                                </InputIcon>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="비밀번호를 입력하세요"
                                    $hasError={!!errors.password}
                                />
                            </InputWrapper>
                            <PasswordRequirements>
                                <PasswordRequirement $met={formData.password.length >= 8}>
                                    <Check size={14} /> 8자 이상
                                </PasswordRequirement>
                                <PasswordRequirement $met={/[a-z]/.test(formData.password)}>
                                    <Check size={14} /> 영문 소문자 포함
                                </PasswordRequirement>
                                <PasswordRequirement $met={/\d/.test(formData.password)}>
                                    <Check size={14} /> 숫자 포함
                                </PasswordRequirement>
                                <PasswordRequirement $met={/[!@#$%^&*()_+]/.test(formData.password)}>
                                    <Check size={14} /> 특수문자 포함
                                </PasswordRequirement>
                            </PasswordRequirements>
                            {passwordStrength && (
                                <PasswordStrength strength={passwordStrength}>
                                    <StrengthText>
                                        {passwordStrength === "weak" && "약함"}
                                        {passwordStrength === "medium" && "보통"}
                                        {passwordStrength === "strong" && "강함"}
                                    </StrengthText>
                                    <StrengthBar>
                                        <StrengthIndicator strength={passwordStrength} />
                                    </StrengthBar>
                                </PasswordStrength>
                            )}
                            {errors.password && (
                                <ErrorMessage>
                                    <AlertCircle size={16} />
                                    <span>{errors.password}</span>
                                </ErrorMessage>
                            )}
                        </InputGroup>

                        <InputGroup>
                            <InputLabel htmlFor="confirmPassword">비밀번호 확인</InputLabel>
                            <InputWrapper>
                                <InputIcon>
                                    <Lock size={18} />
                                </InputIcon>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="비밀번호를 다시 입력하세요"
                                    $hasError={!!errors.confirmPassword}
                                />
                            </InputWrapper>
                            {formData.confirmPassword && formData.password === formData.confirmPassword && (
                                <SuccessMessageStyled>
                                    <Check size={16} />
                                    <span>비밀번호가 일치합니다</span>
                                </SuccessMessageStyled>
                            )}
                            {errors.confirmPassword && (
                                <ErrorMessage>
                                    <AlertCircle size={16} />
                                    <span>{errors.confirmPassword}</span>
                                </ErrorMessage>
                            )}
                        </InputGroup>

                        {errors.form && (
                            <ErrorMessage>
                                <AlertCircle size={16} />
                                <span>{errors.form}</span>
                            </ErrorMessage>
                        )}

                        <TermsAgreement>
                            <Checkbox type="checkbox" id="terms" required />
                            <TermsLabel htmlFor="terms">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    이용약관
                                </a>
                                과{" "}
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    개인정보처리방침
                                </a>
                                에 동의합니다
                            </TermsLabel>
                        </TermsAgreement>

                        <SignupButton type="submit" disabled={isSubmitting || emailVerificationStatus !== "verified"}>
                            {isSubmitting ? "처리 중..." : "회원가입"}
                        </SignupButton>
                    </Form>

                    <LoginPrompt>
                        이미 계정이 있으신가요? <LoginLink onClick={() => navigate("/login")}>로그인</LoginLink>
                    </LoginPrompt>
                </SignupCard>
            </RightPanel>
        </Container>
    )
}

// 기존 스타일 컴포넌트는 유지하고 새로운 스타일 컴포넌트 추가
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

const SignupCard = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`

const SignupHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const SignupTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`

const SignupSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
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
  display: flex;
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
  border: 1px solid ${({ $hasError, theme }) => ($hasError ? "#ef4444" : theme.colors.border)};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? "#ef4444" : "#4285f4")};
    box-shadow: 0 0 0 3px ${({ $hasError }) => ($hasError ? "rgba(239, 68, 68, 0.15)" : "rgba(66, 133, 244, 0.15)")};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.6;
  }
  
  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: #ef4444;
`

const SuccessMessageStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: #10b981;
`



const PasswordStrength = styled.div`
  margin-top: 0.5rem;
`

const StrengthText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.25rem;
  display: block;
`

const StrengthBar = styled.div`
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
`

const StrengthIndicator = styled.div`
  height: 100%;
  border-radius: 2px;
  width: ${({ strength }) => (strength === "weak" ? "30%" : strength === "medium" ? "60%" : "100%")};
  background-color: ${({ strength }) =>
    strength === "weak" ? "#ef4444" : strength === "medium" ? "#f59e0b" : "#10b981"};
  transition: width 0.3s ease, background-color 0.3s ease;
`

const TermsAgreement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #4285f4;
  cursor: pointer;
`

const TermsLabel = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  
  a {
    color: #4285f4;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const SignupButton = styled.button`
  padding: 0.875rem;
  background-color: #4285f4;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  margin-top: 1rem;
  
  &:hover:not(:disabled) {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const LoginPrompt = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const LoginLink = styled.a`
  color: #4285f4;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

// 스타일 컴포넌트 추가 (기존 스타일 컴포넌트 아래에 추가)
const EmailInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s;
  
  &:focus-within {
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
  }
`

const EmailInput = styled.input`
  flex: 1;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: none;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.6;
  }
  
  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`

const VerificationButton = styled.button`
  white-space: nowrap;
  padding: 0 1rem;
  background-color: #4285f4;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover:not(:disabled) {
    background-color: #3367d6;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`

const VerificationCodeWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s;
  
  &:focus-within {
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.15);
  }
`

const VerificationCodeInput = styled.input`
  flex: 1;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: none;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.6;
  }
  
  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`

const VerifyButton = styled.button`
  white-space: nowrap;
  padding: 0 1rem;
  background-color: #10b981;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover:not(:disabled) {
    background-color: #059669;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`

const TimerText = styled.span`
  margin-left: auto;
  font-weight: 500;
  color: #f59e0b;
`

const ExpiredText = styled.span`
  color: #ef4444;
  font-weight: 500;
`

// 기존 InputWrapper와 Input 스타일 컴포넌트는 유지하되, 이메일과 인증코드 입력에는 사용하지 않음


const VerificationMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: ${({ $isSuccess }) => ($isSuccess ? "#10b981" : "#f59e0b")};
`

// 비밀번호 요구사항 표시를 위한 스타일 컴포넌트 추가
const PasswordRequirements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`

const PasswordRequirement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ $met }) => ($met ? "#10b981" : "#9ca3af")};
  
  svg {
    color: ${({ $met }) => ($met ? "#10b981" : "#9ca3af")};
    opacity: ${({ $met }) => ($met ? 1 : 0.5)};
  }
`

// 회원가입 성공 화면을 위한 스타일 컴포넌트
const SuccessCard = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 3rem 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SuccessIcon = styled.div`
  color: #10b981;
  margin-bottom: 1.5rem;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const SuccessTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  animation: slideUp 0.5s ease-in-out;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SuccessMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
  animation: slideUp 0.5s ease-in-out 0.1s both;
`

const LoginButton = styled.button`
  padding: 1rem 2.5rem;
  background-color: #4285f4;
  color: white;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
  margin-bottom: 1rem;
  animation: slideUp 0.5s ease-in-out 0.2s both;
  
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
    transform: translateY(-2px);
  }
`

const HomeLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.95rem;
  text-decoration: underline;
  cursor: pointer;
  animation: slideUp 0.5s ease-in-out 0.3s both;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

export default SignupPage
