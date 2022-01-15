import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos-reducers';
import types from './todos-types';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const contactsStore = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const reducer = { state = contactsStore, action } => {

// }
