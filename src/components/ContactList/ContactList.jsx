import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return contacts.length ? (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  ) : null;
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
