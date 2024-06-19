import { combineReducers, createStore } from 'redux';
// import createStore from 'redux';
import { nameReducer } from './nameInputReducer';

const rootReducer = combineReducers({
    inputNameReducer: nameReducer
})

export const store = createStore(rootReducer)