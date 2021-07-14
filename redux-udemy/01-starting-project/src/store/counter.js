import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//우리가 이 함수에서 할 일은 전역의 state를 slice할 준비를 하는 것이다. 모든 state에는 이름을 지어주어야 한다.
//그리고 initialState를 넣어주어야하며, reducer를 넣어야한다. 그리고 이 안에 있는 리듀서들에서는 immer가 자동적으로 실행이 된다. 때문에 이 안에서는 값을 어떻게든 변경시켜도 상관이 없어진다.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
