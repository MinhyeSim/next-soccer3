//import { createAction, handleActions } from 'redux-actions';
import { call, delay, put, takeLatest, select, throttle } from 'redux-saga/effects';
import { HYDRATE } from 'next-redux-wrapper';
import axios
 from 'axios';
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}

export const initialState = {
    user: {
        isLoggingIn: false,
        data:null
    }
}

const USER_REGISTER_REQUEST = 'auth/USER_REGISTER_REQUEST';
const USER_REGISTER_SUCCESS = 'auth/USER_REGISTER_SUCCESS';
const USER_REGISTER_FAILURE = 'auth/USER_REGISTER_FAILURE';


export const userRegister = user => (
    {type: USER_REGISTER_REQUEST, payload: user}
)



const userRegisterApi = async (payload) => await axios.post(
    `${SERVER}/user/join`,
    payload,
    {headers}
)



function* userRegister(action) {
    try{
        const response = yield fetch()
        const newUser = yield response.json()
        yield put(newUser.data)
    }catch(error){
        yield put()
    }

  }
export function* watchUserRegister() {
   yield takeLatest(3000, USER_REGISTER, userRegister);
  }


const USER_LOGIN = 'auth/USER_LOGIN';
export const userLogin = createAction(USER_LOGIN);
  function* userLogin() {
      try{
        const response = yield fetch()
        const loginUser = yield response.json()
        yield put(loginUser.data)
      }catch(error){
        yield put()
      }

}
export function* watchUserLogin() {
    yield takeLatest(3000, USER_LOGIN, userLogin);
}


const authReducer = (state = initialState, action) => {
    switch (action.type){
        case HYDRATE:
            console.log('### HYDRATE Issue 발생 ###') 
            return {...state, ...action.payload}
        case USER_REGISTER_SUCCESS:
            console.log('### 회원가입 성공 ###') 
            return {...state, registerResult: action.payload}


    }

}

export default authReducer