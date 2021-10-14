import React from 'react';
import {
  StyledActionButton,
  StyledPostActionButton,
} from './styles/PostActionButton';

const PostActionButton = ({ onEdit, isOwnPost }) => {
  if (!isOwnPost) return null;

  return (
    <StyledPostActionButton>
      <StyledActionButton onClick={onEdit}>수정</StyledActionButton>
      <StyledActionButton>삭제</StyledActionButton>
    </StyledPostActionButton>
  );
};

export default PostActionButton;
