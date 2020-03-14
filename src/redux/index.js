import { combineReducers, createStore } from 'redux';

import lobby from './lobby/reducer.js';

const AppReducer = combineReducers({
    lobby,
});

const store = createStore(AppReducer);

export default store;
