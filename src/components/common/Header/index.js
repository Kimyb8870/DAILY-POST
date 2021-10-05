import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { StyledHeader, Wrapper, Spacer, UserInfo } from './styles/Header';

const Header = ({ user }) => {
  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Link className="logo" to="/">
            DAILY POST
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </StyledHeader>
      <Spacer />
    </>
  );
};

export default Header;
