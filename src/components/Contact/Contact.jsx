import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  // Ініціалізуємо стан контактів, зчитуючи їх з localStorage, або за замовчуванням використовуємо порожній масив
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  // Використовуємо useEffect для збереження контактів у localStorage при кожній зміні контактів
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
