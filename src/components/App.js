import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createContact = ({ name, number }) => {
    if (this.state.contacts.some(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      name,
      id: uuidv4(),
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
      number: '',
    }));
  };

  getFilterContacts = (contacts, inputFilterName) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(inputFilterName.toLowerCase()),
    );
  };

  handleDeleteContact = e => {
    this.removeContact(e.target.id);
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = this.getFilterContacts(contacts, filter);

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleInput={this.handleInput} />
        <ContactList
          filterContacts={filterContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
