import { Component } from 'n';
import PhoneForm from './PhoneForm/PhoneForm';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactFilter from './Filter/ContactsFilter';
import ContactList from './Contacts/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const seveContacts = localStorage.getItem('contacts');
    if (seveContacts !== null) {
      const parsedContacts = JSON.parse(seveContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const id = nanoid();
    const { name } = contact;

    if (
      this.state.contacts.filter(contact => contact.name === name).length > 0
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...contact }],
    }));
  };
  deleteItem = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(item => item.id !== id)],
    }));
  };

  filterChange = e => {
    const filter = e.target.value;
    this.setState({ filter: filter.toLowerCase() });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <PhoneForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactFilter onChange={this.filterChange} />

          <ContactList
            onDelete={this.deleteItem}
            items={this.filterContacts()}
          />
        </Section>
      </>
    );
  }
}

export default App;
