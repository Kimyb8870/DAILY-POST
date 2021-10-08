import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTags } from './styles/Tags';

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`}>
          #{tag}
        </Link>
      ))}
    </StyledTags>
  );
};

export default Tags;
