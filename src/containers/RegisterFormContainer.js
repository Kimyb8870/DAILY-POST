import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../modules/auth';
import Auth from '../components/Auth';
import { check } from '../modules/user';
import { withRouter } from 'react-router';

const RegisterFormContainer = ({ history }) => {
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
    if (password !== passwordConfirm) {
      // !!오류처리!!
      alert('password와 passwordConfirm이 일치하지 않습니다');
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
      console.group('authError 오류발생');
      console.groupEnd(authError);
    }
    if (auth) {
      console.group('회원가입 성공');
      console.groupEnd(auth);
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  //user 값 확인하기
  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <Auth.Form
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterFormContainer);
