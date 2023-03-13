import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import { Form, AddButton } from './Phone.styled';

export default function PhoneForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    onSubmit({ name, number });
  };

  return (
    <Formik>
      <Form onSubmit={handleSubmit} name="contact">
        <label htmlFor={nameId}>
          Name
          <input
            value={name}
            onChange={handleChange}
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={numberId}>
          Number
          <input
            value={number}
            onChange={handleChange}
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Formik>
  );
}

PhoneForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
// class PhoneForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   render() {
//     const { name, number } = this.state;

//   }
// }

// export default PhoneForm;
