import React from 'react';
import { connect } from 'react-redux';
import { register } from '@/modules/auth/register';
import { Register } from '@/components/auth/Register';

const RegisterPage = () => {
  return (
    <Register/>
  );
};

export default connect(
  state => ({
    registerUser: state.registerUser
  }),
  {
    register
  }
)(RegisterPage);