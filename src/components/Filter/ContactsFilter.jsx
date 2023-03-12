import { PropTypes } from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { FilterForm } from './Filter.styled';

const ContactFilter = ({ onChange }) => {
  const filterId = nanoid();
  return (
    <FilterForm>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} onChange={onChange} name="filter" />
    </FilterForm>
  );
};

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
