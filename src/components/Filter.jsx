import React from 'react';
import { connect, useSelector } from 'react-redux';
import { filterContact } from '../redux/actions';

const Filter = ({ value, onChange }) => (
  <input
    value={value}
    onChange={onChange}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
