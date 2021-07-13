import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import store from "./store/index"

//Provider를 제공해줌으로써, APP안에서 store의 데이터를 읽고 쓰고 저장하고가 ㅏ능해졌다., 
ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root'));
