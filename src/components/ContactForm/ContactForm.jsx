import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();

    const form = ev.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formItem}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.formItem}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
