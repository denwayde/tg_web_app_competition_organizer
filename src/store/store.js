import { combineReducers, createStore } from 'redux';
// import createStore from 'redux';
import { nameReducer } from './nameInputReducer';
import { organizationReducer } from './organizationReducer';
import { gameChoiseReducer } from './gameChoiseReducer';

const rootReducer = combineReducers({
    inputNameReducer: nameReducer,
    organOptionReducer: organizationReducer,
    gameChoiseReducer: gameChoiseReducer
})

export const store = createStore(rootReducer)