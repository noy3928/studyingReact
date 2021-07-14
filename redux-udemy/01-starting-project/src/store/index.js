import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//우리가 이 함수에서 할 일은 전역의 state를 slice할 준비를 하는 것이다. 모든 state에는 이름을 지어주어야 한다.
//그리고 initialState를 넣어주어야하며, reducer를 넣어야한다. 그리고 이 안에 있는 리듀서들에서는 immer가 자동적으로 실행이 된다. 때문에 이 안에서는 값을 어떻게든 변경시켜도 상관이 없어진다.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increment(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    //리덕스에서는 절대 이 리듀서 안에서 값을 바꿔서는 안된다. 무조건 기존에 있던 값에 덧입혀줌으로써, 값을 내보내주어야 한다.절대 기존의 state의 값을 변경시켜서는 안된다. state.counter++와 같이. 이는 여러가지 버그를 만들어낼 수 있다. 여기서는 레퍼런트 타입이기 때문에 그렇게 해서는 안된다는 말이다. 강사가 적은 글이 있으니 참고하도록 하자.
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter, //여기서 두 값을 다 적어주는 이유는 적지 않았을 때, undefined가 되지 않도록 하기 위함이다.
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
