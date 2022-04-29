import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { watchCounter } from './basic/counter';
import register, { watchUserRegister } from './auth/register';



const rootReducer = combineReducers({
  counter, register
});

export function* rootSaga() {
  yield all([watchCounter(),watchUserRegister()]);
}

export default rootReducer;