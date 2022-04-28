import React from 'react';
import { connect } from 'react-redux';
import { login } from '@/modules/auth/user';
import { Login } from '@/components/auth/Login';

const LoginPage = () => {
  return (
    <Login/>
  );
};

export default connect(
  state => ({
    loginUser: state.loginUser
  }),
  {
    login
  }
)(LoginPage);