import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { StyledHeader, Wrapper, Spacer } from './styles/Header';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Link className="logo" to="/">
            DAILY POST
          </Link>
          <div className="right">
            <Button>로그인</Button>
          </div>
        </Wrapper>
      </StyledHeader>
      <Spacer />
    </>
  );
};

export default Header;
