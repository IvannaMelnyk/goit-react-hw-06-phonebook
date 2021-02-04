import { useState } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/phonebook-actions';
import { getContacts } from '../../redux/phonebook-selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = shortid.generate();
  const contactNumberId = shortid.generate();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      alert(`Please enter all data`);
      return;
    }

    if (number === '') {
      alert(`Please enter phone number`);
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }

    dispatch(contactsActions.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={contactNameId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Сontact name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
        />
      </label>
      <label className={s.label} htmlFor={contactNumberId}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          placeholder="Сontact number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
