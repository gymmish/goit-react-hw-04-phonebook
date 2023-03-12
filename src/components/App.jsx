import { useState, useEffect } from 'react';
import PhoneForm from './PhoneForm/PhoneForm';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactFilter from './Filter/ContactsFilter';
import ContactList from './Contacts/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const seveContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(seveContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const id = nanoid();
    const { name } = contact;

    if (contacts.filter(contact => contact.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => ({
      contacts: [...prevState, { id, ...contact }],
    }));
  };

  const deleteItem = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  const filterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <PhoneForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <ContactFilter onChange={filterChange} />

        <ContactList onDelete={deleteItem} items={filterContacts()} />
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const seveContacts = localStorage.getItem('contacts');
//     if (seveContacts !== null) {
//       const parsedContacts = JSON.parse(seveContacts);
//       this.setState({ contacts: parsedContacts });
//       return;
//     }
//     this.setState({ contacts: [] });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = contact => {
//     const id = nanoid();
//     const { name } = contact;

//     if (
//       this.state.contacts.filter(contact => contact.name === name).length > 0
//     ) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id, ...contact }],
//     }));
//   };
//   deleteItem = id => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts.filter(item => item.id !== id)],
//     }));
//   };

// filterChange = e => {
//   const filter = e.target.value;
//   this.setState({ filter: filter.toLowerCase() });
// };

// filterContacts = () => {
//   const { filter, contacts } = this.state;
//   return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
// };

//   render() {
//     return (
//       <>
//         <Section title="Phonebook">
//           <PhoneForm onSubmit={this.addContact} />
//         </Section>
//         <Section title="Contacts">
//           <ContactFilter onChange={this.filterChange} />

//           <ContactList
//             onDelete={this.deleteItem}
//             items={this.filterContacts()}
//           />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
