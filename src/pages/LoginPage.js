import React from 'react';
import Auth from '../components/Auth';
import LoginFormContainer from '../containers/LoginFormContainer';

const LoginPage = () => {
  return (
    <Auth>
      <Auth.Template>
        <LoginFormContainer />
      </Auth.Template>
    </Auth>
  );
};

export default LoginPage;
