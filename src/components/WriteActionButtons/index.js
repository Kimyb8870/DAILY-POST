import React from 'react';
import {
  StyledButton,
  StyledWriteActionButtons,
} from './styles/WriteActionButtons';

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <StyledWriteActionButtons>
      <StyledButton cyan onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </StyledWriteActionButtons>
  );
};

export default WriteActionButtons;
