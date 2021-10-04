import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledAuth,
  StyledAuthTemplate,
  StyledAuthForm,
  WhiteBox,
  StyledInput,
  Footer,
  ButtonWithMarginTop,
  ErrorMessage,
} from './styles/Auth';

const Auth = ({ children, ...restProps }) => {
  return <StyledAuth {...restProps}>{children}</StyledAuth>;
};

Auth.Template = function AuthTemplate({ children, ...restProps }) {
  return (
    <StyledAuthTemplate {...restProps}>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">DAILY POST</Link>
        </div>
        {children}
      </WhiteBox>
    </StyledAuthTemplate>
  );
};

Auth.Form = function AuthForm({ type, form, onChange, onSubmit, error }) {
  const textMap = {
    login: '로그인',
    register: '회원가입',
  };

  const text = textMap[type];

  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원 가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </StyledAuthForm>
  );
};

export default Auth;
