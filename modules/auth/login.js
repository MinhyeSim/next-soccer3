import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit';

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    loginUser: null,
    loginError: null,
    isLoggined: false
}

const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGIN_CANCELED = 'auth/LOGIN_CANCELED';
const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
const SAVE_TOKEN = 'auth/SAVE_TOKEN';
const DELETE_TOKEN = 'auth/DELETE_TOKEN';

export const loginRequest = createAction(LOGIN_REQUEST, data => data)
export const loginCanceled = createAction(LOGIN_CANCELED, data => data)
export const logoutRequest = createAction(LOGOUT_REQUEST, data => data)