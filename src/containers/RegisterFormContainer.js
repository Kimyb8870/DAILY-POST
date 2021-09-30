import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';
import Auth from '../components/Auth';

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
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

  const onSumbit = (e) => {
    e.preventDefault();
    //나중에 구현
  };

  useEffect(() => {
    dispatch(
      initializeForm({
        form: 'register',
      }),
    );
  }, [dispatch]);

  return (
    <Auth.Form
      type="register"
      form={form}
      onChange={onChange}
      onSumbit={onSumbit}
    />
  );
};

export default RegisterFormContainer;
