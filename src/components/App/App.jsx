import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Додавання нового контакту
  const addContact = (newContact) => {
    const duplicateContact = contacts.find(contact => contact.name === newContact.name);

    if (duplicateContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  // Видалення контакту
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };

  // Фільтрація контактів
  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
