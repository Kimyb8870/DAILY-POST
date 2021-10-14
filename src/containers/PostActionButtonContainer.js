import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostActionButton from '../components/PostActionButton';
import { setOriginalPost } from '../modules/write';

const PostActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { post, user } = useSelector(({ post, user }) => ({
    post: post.post,
    user: user.user,
  }));

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  const isOwnPost = (user && user._id) === (post && post.user._id);

  return <PostActionButton onEdit={onEdit} isOwnPost={isOwnPost} />;
};

export default withRouter(PostActionButtonContainer);
