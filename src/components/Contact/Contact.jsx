import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.contact}>
      <p>
        <span className={styles.contactName}>{name}</span>: {number}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => deleteContact(id)}  // Викликаємо функцію видалення
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
