import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSubInfo } from './styles/SubInfo';

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <StyledSubInfo hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </StyledSubInfo>
  );
};

export default SubInfo;
