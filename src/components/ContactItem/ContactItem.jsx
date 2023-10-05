import React from 'react';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li>
    <span>
      {contact.name}: {contact.number}
    </span>
    <button type="button" onClick={() => onDeleteContact(contact.id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
