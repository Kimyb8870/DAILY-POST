import React from 'react';
import Button from '../Button';
import { StyledHeader, Wrapper, Spacer } from './styles/Header';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Wrapper>
          <div className="logo">DAILY POST</div>
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
