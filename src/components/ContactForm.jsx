import React, { useState } from 'react';
import { addContact } from '../redux/actions';
import { nanoid } from 'nanoid';
import { connect, useSelector } from 'react-redux';

const ContactsForm = ({ onAddContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = e => {
    e.preventDefault();
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      return window.alert(`${name} is already in contacts`);
    } else {
      onAddContact();

      setName('');
      setNumber('');
    }
  };
  return (
    <form onSubmit={addContact}>
      <label>Name</label>
      <input
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        value={number}
        onChange={e => setNumber(e.currentTarget.value)}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});
const mapDispatchToProps = dispatch => ({
  onAddContact: (name, number) =>
    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      }),
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
