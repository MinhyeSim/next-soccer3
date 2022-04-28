import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '@/modules/auth/register';
import { Register } from '@/components/auth/Register';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  
  const [user, setUser] = useState({
    userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
})
  const dispatch = useDispatch()
  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setUser({...user,[name]: value})
  }
  const onSubmit = e => {
      window.location.href = "./login"
}

  return (
    <Register onChange={onChange} onSubmit={onSubmit} />
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