import { nanoid } from 'nanoid';
import types from './todos-types';

const addTodo = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export { addTodo };
