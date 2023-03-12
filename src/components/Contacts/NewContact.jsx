import React from 'react';
import { PropTypes } from 'prop-types';
import { NewContact, DelButton } from './Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <NewContact key={id}>
      {name}: {number}
      <DelButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DelButton>
    </NewContact>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
