import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, withDevTools(applyMiddleware(sagaMiddleware)));

export default store;
