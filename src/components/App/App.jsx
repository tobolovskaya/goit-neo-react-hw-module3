import React, { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';

const App = () => {
  // Початкові контакти
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  // Функція для видалення контакту
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
