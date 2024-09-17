import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  // Додавання нового контакту
  const addContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, { id: nanoid(), ...newContact }]);
  };

  // Видалення контакту
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };

  // Фільтрація контактів
  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      
      {/* Форма для додавання контакту */}
      <ContactForm addContact={addContact} />

      {/* Поле пошуку */}
      <SearchBox filter={filter} setFilter={setFilter} />

      {/* Список контактів */}
      <ContactList contacts={getFilteredContacts()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
