import React from 'react';
import { PostHead, StyledPostViewer, PostBody } from './styles/PostViewer';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewer = ({ post, loading, error }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <StyledPostViewer>존재하지 않는 포스트입니다</StyledPostViewer>;
    }
    return <StyledPostViewer>오류 발생</StyledPostViewer>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;
  return (
    <StyledPostViewer>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>

      <PostBody
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
    </StyledPostViewer>
  );
};

export default PostViewer;
