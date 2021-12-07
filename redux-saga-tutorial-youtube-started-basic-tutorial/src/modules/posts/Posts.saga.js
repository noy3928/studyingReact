import {takeEvery, all, call, put} from 'redux-saga/effects'
import {GET_POSTS} from "./Posts.actions"
import {getPosts} from "../../utils/api"

//액션을 디스패치 하기 위해서는 put을 사용하고, 함수를 호출하기 위해서는 call을 사용한다. 

function* getPostsSaga(){
    getPosts()
}

function* getPostsWatcher() {
    yield takeEvery(GET_POSTS, getPostsSaga) // takeEvery의 첫번째 인자로는, await할 액션을 넣는다. 이 제네레이터 함수는 GET_POSTS의 액션이 일어날때까지 기다린다. 이 액션이 실행된다면, 그때서야 다음 스텝으로 움직인다. 
}

export default function* postsSaga() {
    yield all([getPostsWatcher()])
}

//test