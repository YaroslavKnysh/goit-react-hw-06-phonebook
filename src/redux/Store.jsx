import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers';
import types from './types';

const rootReducer = combineReducers({
  contacts: contactsReducer,
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

