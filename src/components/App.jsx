import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";


export class App extends Component {
  state = {
    contacts: [
    //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  fromSubmitHandler = ({name, number}) => {
    // console.log(data);
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
// const {contacts, filter} = this.state
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
