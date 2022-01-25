import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';

const ContactsList = () => {
  const filteredContacts = useSelector(state => {
    const normalizedFilter = state.contacts.filter.toLowerCase();

    return state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  });
  const dispatch = useDispatch();
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(deleteContact(id)),
// });
export default ContactsList;
