import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from './ContactsPage.module.css';
const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <h1 className={styles.contactsPhonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
