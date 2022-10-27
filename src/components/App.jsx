import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  fromSubmitHandler = ({name, number}) => {
    const todo = {
      id: nanoid(),
      name,
      number
    }
    const findName = this.state.contacts.find(
      e => e.name.toLowerCase() === todo.name.toLowerCase()
    );
    findName
      ? alert(`${todo.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [todo, ...contacts],
        }));
  }
  
  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }
  getVisibleContacts = () => {
    const { contacts, filter } = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.fromSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.getVisibleContacts()} deleteContacts={this.deleteContact} />
      </>
    )
  }
}
