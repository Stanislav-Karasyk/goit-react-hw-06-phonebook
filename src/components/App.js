import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

const App = () => {
 
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // handleInput = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // createContact = ({ name, number }) => {
  //   if (this.state.contacts.some(item => item.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const contact = {
  //     name,
  //     number,
  //   };
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contact],
  //     name: '',
  //     number: '',
  //   }));
  // };

  // getFilterContacts = (contacts, inputFilterName) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(inputFilterName.toLowerCase()),
  //   );
  // };

  // handleDeleteContact = e => {
  //   this.removeContact(e.target.id);
  // };

  // removeContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //   }));
  // };

  

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
      </>
    );
  }


export default App;
