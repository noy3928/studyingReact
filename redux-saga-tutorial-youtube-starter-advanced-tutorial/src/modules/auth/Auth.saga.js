import { all, call, delay, put, take, fork } from 'redux-saga/effects';
import {authFail, authSuccess, AUTH_START, LOGOUT_START, logoutFail, logoutSuccess} from "./Auth.actions"
import {registerUser, loginUser, logoutUser} from "../../utils/api" 

function* authenticate({email, password, isRegister}){
  try{
    let data;
    if(isRegister){
      data = yield call(registerUser, {email, password})
    }else{
      data = yield call(loginUser, (email, password))
    }
    yield put(authSuccess(data.user));
    return data.user.uid;
  }catch(error){
    yield put(authFail(error.message))
  }
}

function* logout(){
  try{
yield call(logoutUser);
yield put(logoutSuccess())
  }catch(error){
    yield put(logoutFail(error.message))
  }
}

function* longRunningYield(){
  yield delay(5000);
  yield console.log('Hi');
}

function* throwErrorSaga(){
  yield delay(1000);
  yield call(() => {
    throw Error('New Error from Saga');
  })
}

function* authFlow(){
  while(true){
    const {payload} = yield take(AUTH_START);
    const uid = yield call(authenticate, payload)
    yield fork(longRunningYield) // fork는 인자로 넘어온 함수를 비동기 함수로써 처리한다. 그러니까, 이 해당 함수의 순서를 기다리지 않고 넘어간다는 말이다. 
    yield fork(throwErrorSaga);
    if(uid){
      yield take(LOGOUT_START);
      yield call(logout)
    }
  }
}

export default function* () {
  yield all([authFlow()]);
}
