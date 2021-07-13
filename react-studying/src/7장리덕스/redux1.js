import React, {PureComponent} from 'react';
import {creacteStore, createStore} from 'redux';
import { Provider } from 'react-redux';

class ReduxApp extends PureComponent{
    //createStore함수의 리듀서로 state=>state를 전달하여 스토어를 생성한 것입니다. 지금은 어떤 자가업도 하지 않을 예정이므로 state를 그대로 반환하는 화살표 함수를 리듀서로 사용했습니다. 
    store = creacteStore(state=>state);

    render(){
        return(
            //프로바이더 컴포넌트에 스토어 프로퍼티를 사용했습니다. Provider는 react-redux에서 제공하는 스토어 데이터 공급자입니다. 이 컴포넌트에 store프로퍼티로 스토어 데이터를 전달했습니다. 이후 Provider컴포넌트 아래에 배치한 컴포넌트들이 스토어에 연결될 것입니다. 이 부분은 컨텍스트의 구동 원리와 같습니다. 
            <Provider store={this.store}>
                리덕스 예제 
            </Provider>
        )
    }

}




// createStore(reducer /*initial  state*/ /*enhance*/)
//createStore함수는 리듀서, 스토어데이터의 초깃값, 미들웨어 함수를 인자로 받습니다. state와 미들웨는 생략해도 스토어가 생성됩니다. 일단 리듀서만을 인자로 전달하여 스토어를 구성해봅시다. 미들웨어는 리듀서 함수가 실행될 때 함께 실행되는 함수들입니다. 미들웨어는 이후 리덕스 개발자 라이브러리를 연동할 때 자세히 알아보겠습니다. 

