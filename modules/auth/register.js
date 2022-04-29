//import { createAction, handleActions } from 'redux-actions';
//import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isRegitered: false
    //전역으로 사용하는 상태값 
}

const REGISTER_REQUEST = 'auth/REGISTER_REQUEST';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';
const UNREGISTER_REQUEST = 'auth/UNREGISTER_REQUEST';
const UNREGISTER_SUCCESS = 'auth/UNREGISTER_SUCCESS';
const UNREGISTER_FAILURE = 'auth/UNREGISTER_FAILURE';

export const registerRequest = createAction(REGISTER_REQUEST, data => data)
export const unregisterRequest = createAction(UNREGISTER_REQUEST, data => data)


export function* watchUserRegister() {
    yield takeLatest(USER_REGISTER_REQUEST, userRegisterSaga);
}
function* userRegisterSaga() {
    try {
        const response = yield call(userRegisterAPI)
        console.log(" 회원가입 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: USER_REGISTER_SUCCESS, payload: response.data})
    } catch (error) {
        yield put({type: USER_REGISTER_FAILURE, payload: error.message})
    }
}
const userRegisterAPI = payload => axios.post(
    `${SERVER}/user/join`,
    payload,
    {headers}
)

const auth = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log(' ### HYDRATE Issue 발생 ### ')
            return {
                ...state,
                ...action.payload
            }
        case USER_REGISTER_SUCCESS:
            console.log(' ### 회원가입 성공 ### ' + action.payload)
            return {
                ...state,
                user: action.payload
            }
        case USER_REGISTER_FAILURE:
            console.log(' ### 회원가입 실패 ### ' + action.payload)
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default auth