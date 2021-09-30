import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';
import Auth from '../components/Auth';

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSumbit = (e) => {
    e.preventDefault();
    //나중에 구현
  };

  useEffect(() => {
    dispatch(
      initializeForm({
        form: 'login',
      }),
    );
  }, [dispatch]);

  return (
    <Auth.Form
      type="login"
      form={form}
      onChange={onChange}
      onSumbit={onSumbit}
    />
  );
};

export default LoginFormContainer;
