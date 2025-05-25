import styled, { keyframes } from "styled-components"


const LoadingSpinner = ({ size = 40, color = "#4285f4" }) => {
    return (
        <SpinnerContainer>
            <Spinner size={size} color={color} />
        </SpinnerContainer>
    )
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
`



const Spinner = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${({ color }) => color};
  animation: ${spin} 0.8s linear infinite;
`

export default LoadingSpinner
