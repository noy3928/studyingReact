const redux = require('redux');

//우리는 먼저 스토어를 생성하고, 그 다음 리듀서를 생성해야한다. 그런 다음 컴포넌트를 만들고, 액션을 만든다. 

//리듀서는 항상 두가지 인자를 받는다. 1)이전 state와 2) dispatch Acion이다. 리듀서는 항상 새로운 값을 내본ㄹ 것이다. 주의해야할 점이 있다면, 그 값의 형태는 항상 변해서는 안된다. 항상 기대 가는한 값을 배출해주는 것이 리듀서이다. 
const counterReducer = (state ={counter:0}, action) => {
    if(action.type === 'increment'){
            //state는 어떤 값이든 될 수 있다. 그렇지만 통상적으로는 객체로 사용된다. 
        return{
            counter: state.counter + 1
        };
    }

    if(action.type === "decrement"){
        return{
            counter: state.counter - 1
        };
    }

    return state;
};
//1.스토어를 생성한다 우리는 이 스토어를 가지고 무엇을 할 것이니가? 데이터를 관리할 것이다. 그런데 그 데이터는 리듀서에 의해서 결정된다. 리듀서는 새로운 데이터를 만들어낸다. 그리고 스토어에 주입한다. 
const store = redux.createStore(counterReducer);//스토어는 어떤 리듀서가 데이터에 영향을 미치는지 알 필요가 있다. 그래서 파라미터에 리듀서를 넣어준다. 

//리듀서와 스토어 설정이 끝났다면 우리는 이제 스토어를 구독할 누군가가 필요하다. 

console.log(store.getState())


const counterSubscriber = () => {
    //getState()는 항상 가장 최신의 데이터를 업데이트 해준다. 
    const latestState = store.getState()
    console.log(latestState);
}

//subscribe는 구독함수를 필요로 한다. 그리고 그 함수에 대해서, 스토어의 데이터를 기대한다. 
store.subscribe(counterSubscriber);

store.dispatch({type: "increment" });
store.dispatch({type: "decrement" });