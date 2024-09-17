import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Number is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: uuidv4(),
      ...values,
    };
    addContact(newContact);
    resetForm();
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
          <Field type="tel" id="number" name="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>

        <button type="submit" className={styles.submitButton}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
