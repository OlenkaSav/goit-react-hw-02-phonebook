import React from 'react';
// import { nanoid } from 'nanoid';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);

export default ContactList;
