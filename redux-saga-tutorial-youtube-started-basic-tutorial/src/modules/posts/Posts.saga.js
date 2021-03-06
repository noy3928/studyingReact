import {takeEvery, all, call, put, takeLeading} from 'redux-saga/effects'
import {getPostsSuccess, GET_POSTS, getPostsFailed, ADD_POST, addPostFailed, addPostSuccess} from "./Posts.actions"
import {getPosts, addPost} from "../../utils/api"

//액션을 디스패치 하기 위해서는 put을  사용하고, 함수를 호출하기 위해서는 call을 사용한다. 

function* getPostsSaga(){
    try{
        const data = yield call(getPosts);
        console.log(data)
        yield put(getPostsSuccess(data));// 여기서는 불러온 데이터를 리덕스에 넣어주는 역할을 한다. put.
    }catch(error) {
        yield put(getPostsFailed(error.message));
    }

}

function* getPostsWatcher() {
    yield takeEvery(GET_POSTS, getPostsSaga) // takeEvery의 첫번째 인자로는, await할 액션을 넣는다. 이 제네레이터 함수는 GET_POSTS의 액션이 일어날때까지 기다린다. 이 액션이 실행된다면, 그때서야 다음 스텝으로 움직인다. 
}

function* addPostSaga(action){
    try{
        const data = yield call((addPost, action.payload));
        yield put(addPostSuccess({...action.payload, ...data}));
    }catch(error){
        yield put(addPostFailed(error.message))
    }
}

function* addPostWatcher(){
    yield takeLeading(ADD_POST, addPostSaga);
}


export default function* postsSaga() {
    yield all([getPostsWatcher(), addPostWatcher()])
}

//test