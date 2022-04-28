import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';

const USER_REGISTER = 'auth/USER_REGISTER';
export const userRegister = createAction(USER_REGISTER);
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
 export function* watchuserLogin() {
    yield takeLatest(3000, USER_LOGIN, userLogin);
  }
  