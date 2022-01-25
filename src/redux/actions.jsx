import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import types from './types';

const addContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});

const filterContact = value => ({
  type: types.FILTER,
  payload: value,
});
export { addContact, deleteContact, filterContact };

// export const addContact = createAction(
//   'contacts/add_contact',
//   (name, number) => ({
//     payload: { id: nanoid(), name, number },
//   }),
// );

// export const deleteContact = createAction('contacts/delete_contact');
// export const addFilter = createAction('contacts/add_filter');

// import { nanoid } from 'nanoid';
// import types from './todos-types';

// const addTodo = (name, number) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

// export { addTodo };
