import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../modules/auth';
import Auth from '../components/Auth';
import { check } from '../modules/user';
import { withRouter } from 'react-router';

const RegisterFormContainer = ({ history }) => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes('')) {
      setError('값을 모두 입력해주세요');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다');
      return;
    }

    dispatch(register({ username, password }));
  };

  //랜더링 시 입력폼 초기화
  useEffect(() => {
    dispatch(
      initializeForm({
        form: 'register',
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다');
        return;
      }

      console.log('authError 오류발생');
      console.log(authError);
      setError('입력하신 값이 유효하지 않습니다');
    }

    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  //user 값 확인하기
  useEffect(() => {
    if (user) {
      history.push('/');
    }
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.log('Error on localStorage');
    }
  }, [user, history]);

  return (
    <Auth.Form
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterFormContainer);
