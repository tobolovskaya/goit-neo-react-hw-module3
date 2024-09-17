import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  // Початкові значення полів
  const initialValues = {
    name: '',
    number: '',
  };

  // Валідація полів форми за допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^[0-9\-\+]{9,}$/, 'Invalid phone number format')
      .required('Number is required'),
  });

  // Сабміт форми
  const onSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm(); // Скидання форми після сабміту
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>

        <button type="submit" className={styles.submitButton}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
