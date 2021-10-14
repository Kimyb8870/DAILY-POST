import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import PostActionButtonContainer from '../containers/PostActionButtonContainer';
import PostViewerContainer from '../containers/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <PostActionButtonContainer />
    </>
  );
};

export default PostPage;
