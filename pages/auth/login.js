import React, {useState} from 'react';
import { connect } from 'react-redux';
import { loginRequest, unloginRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';
import { useDispatch } from 'react-redux';

const LoginPage = () => {

  const[user, setUser] = useState({
    userid:'', password:''
  })
  const dispatch = useDispatch()
  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setUser({...user,[name]: value})
  }
  const onSubmit = e => {
      e.preventDefault()
      alert('로그인 확인:'+JSON.stringify(user))
      dispatch(loginRequest(user))
      window.location.href = "./"
}
 
  return (
    <Login onChange={onChange} onSubmit={onSubmit}/>
  );
};

const mapStateToProps = state => ({})
const loginActions = {loginRequest, unloginRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);