import React from 'react';
import styled from "styled-components";

const Modal = ({isOpen, title,  onConfirm, onCancel }) => {

    if (!isOpen) return null;
    return (
        <ModalOverlay onClick={onCancel}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <ModalTitle>{title}</ModalTitle>
                <ModalActions>
                    <CancelButton onClick={onCancel}>취소</CancelButton>
                    <ConfirmButton onClick={() => {
                        onConfirm()
                        onCancel()
                    }}>
                        확인
                    </ConfirmButton>
                </ModalActions>
            </ModalBox>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 320px;
  text-align: center;
`

const ModalTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
`

const CancelButton = styled.button`
  background: #eee;
  padding: 8px 16px;
  border-radius: 6px;
`

const ConfirmButton = styled.button`
  background: #ff4d4f;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
`

export default Modal;