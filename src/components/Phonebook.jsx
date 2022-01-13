import React, { useState, useEffect } from 'react';
import ContactsList from './ContactsList';
import Filter from './Filter';
import ContactsForm from './ContactForm';

const Phonebook = () => {
  const [contacts, setContacts] = useState(
    localStorage.getItem('newContacts')
      ? JSON.parse(localStorage.getItem('newContacts'))
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
  );
  const [filter, setFilter] = useState('');

  function filterContacts() {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }
  function deleteContact(id) {
    setContacts(contacts.filter(item => item.id !== id));
  }

  useEffect(() => {
    window.localStorage.setItem('newContacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ContactsForm
        onAddContact={contact => setContacts([...contacts, contact])}
        contacts={contacts}
      />

      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <Filter value={filter} onChange={filter => setFilter(filter)} />

      <ContactsList
        contacts={filterContacts()}
        onDelete={id => deleteContact(id)}
      />
    </div>
  );
};

export default Phonebook;
