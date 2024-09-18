import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
