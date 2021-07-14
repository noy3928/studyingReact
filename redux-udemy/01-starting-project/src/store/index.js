import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//여러개의 리듀서가 있다할지라도, 이 함수 안에서는 하나의 리듀서만을 가지기 원한다. 전역에서 사용될 리듀서.
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
}); // 스토어에 리듀서를 주입해주는 방법.

export default store;

//리듀서는 필요없어졌기 때문에, 지우겠다.

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//       //리덕스에서는 절대 이 리듀서 안에서 값을 바꿔서는 안된다. 무조건 기존에 있던 값에 덧입혀줌으로써, 값을 내보내주어야 한다.절대 기존의 state의 값을 변경시켜서는 안된다. state.counter++와 같이. 이는 여러가지 버그를 만들어낼 수 있다. 여기서는 레퍼런트 타입이기 때문에 그렇게 해서는 안된다는 말이다. 강사가 적은 글이 있으니 참고하도록 하자.
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter, //여기서 두 값을 다 적어주는 이유는 적지 않았을 때, undefined가 되지 않도록 하기 위함이다.
//       };
//     }

//     if (action.type === "increase") {
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     }

//     if (action.type === "decrement") {
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     }

//     if (action.type === "toggle") {
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     }

//     return state;
//   };
