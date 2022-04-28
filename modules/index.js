import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from '@/components/basic/Counter';

const rootReducer = combineReducers({
  counter,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;