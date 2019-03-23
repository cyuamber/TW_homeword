import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as dialogues from '../src/pages/Dashboard/store/reducer';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers({ ...dialogues }),
    applyMiddleware(thunk)
);

export default store;
