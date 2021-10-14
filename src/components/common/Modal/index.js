import React from 'react';
import { FullScreen, StyledModal, StyledButton } from './styles/Modal';

const Modal = ({
  visible,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;

  return (
    <FullScreen>
      <StyledModal>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton cyan onClick={onConfirm}>
            {confirmText}
          </StyledButton>
        </div>
      </StyledModal>
    </FullScreen>
  );
};

export default Modal;
