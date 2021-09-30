import React from 'react';
import Auth from '../components/Auth';
import RegisterFormContainer from '../containers/RegisterFormContainer';

const RegisterPage = () => {
  return (
    <Auth>
      <Auth.Template>
        <RegisterFormContainer />
      </Auth.Template>
    </Auth>
  );
};

export default RegisterPage;
