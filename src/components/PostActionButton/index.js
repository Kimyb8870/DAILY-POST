import React, { useState } from 'react';
import { removePost } from '../../lib/api/client';
import AskRemoveModal from '../AskRemoveModal';
import {
  StyledActionButton,
  StyledPostActionButton,
} from './styles/PostActionButton';

const PostActionButton = ({ onEdit, onRemove, isOwnPost }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  if (!isOwnPost) return null;

  return (
    <>
      <StyledPostActionButton>
        <StyledActionButton onClick={onEdit}>수정</StyledActionButton>
        <StyledActionButton onClick={onRemoveClick}>삭제</StyledActionButton>
      </StyledPostActionButton>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default PostActionButton;
