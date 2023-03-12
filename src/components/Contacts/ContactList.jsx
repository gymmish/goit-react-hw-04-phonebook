import { PropTypes } from 'prop-types';
import React from 'react';
import { PhoneBook } from './Contact.styled';
import { Contact } from './NewContact';

export const ContactList = ({ items, onDelete }) => (
  <PhoneBook>
    {items.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDelete}
      ></Contact>
    ))}
  </PhoneBook>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;

// export const ContactList = ({ items, onDelete }) => (
//   <PhoneBook>
//     {items.map(({ id, name, number }) => (
//       <NewContact key={id}>
//         {name}: {number}
//         <DelButton type="button" onClick={() => onDelete(id)}>
//           Delete
//         </DelButton>
//       </NewContact>
//     ))}
//   </PhoneBook>
// );
