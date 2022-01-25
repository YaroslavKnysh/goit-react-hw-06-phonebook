import { combineReducers } from 'redux';
import types from './types';
import initialState from './state';

const items = (state = initialState.contacts.items, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];
    case types.DELETE_CONTACT:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};
const filter = (state = initialState.contacts.filter, { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    // initialState.contacts.items.filter(item =>
    //   item.name.toLowerCase().includes(state.toLowerCase()),
    // );
    default:
      return state;
  }
};
export default combineReducers({
  items,
  filter,
});

// const items = createReducer(initialState.contacts.items, {
//   [addContact]: (state, { payload }) => [payload, ...state],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const filter = createReducer(initialState.contacts.filter, {
//   [addFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({ items, filter });

// import { combineReducers } from 'redux';
// import types from './todos-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     default:
//       return state;
//   }
// };

// const filter = (state = '', actions) => {
//   return state;
// };

// export default combineReducers({
//   items,
//   filter,
// });
