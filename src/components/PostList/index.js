import React from 'react';
import Button from '../common/Button';
import {
  StyledPostItem,
  StyledPostList,
  WritePostButtonWrapper,
} from './styles/PostList';
import Tags from '../common/Tags';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <StyledPostItem>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate).toLocaleDateString()}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </StyledPostItem>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <StyledPostList>에러 발생</StyledPostList>;
  }

  return (
    <StyledPostList>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {posts && !loading && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </StyledPostList>
  );
};

export default PostList;
