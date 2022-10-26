import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormGeneral, LabelForm, InputForm,BtnAddContact } from "./ContactForm.styled";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };
    nameInputId = nanoid();
    numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    // вычисляемые свойства объектов!
    this.setState({
      [name]: value,
    })
  }
  
  // handleNameChange = e => {
  //   // console.log(e.currentTarget.value);
  //   this.setState({name: e.currentTarget.value})
  // }

  // handleNumberChange = e => {
  //   this.setState({number: e.currentTarget.value})
  // }
    
  handleSubmit = e => {
    e.preventDefault();
    
    this.props.onSubmit(this.state);
    this.reset();
}
  
  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

    render() {
        return (
        <FormGeneral onSubmit={this.handleSubmit}>
          <LabelForm htmlFor={this.nameInputId}>Name</LabelForm>
          <InputForm
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
          />
          <LabelForm htmlFor={this.numberInputId}>Number</LabelForm>
          <InputForm
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.numberInputId}
              value={this.state.number}
              onChange={this.handleChange}
            />
          <BtnAddContact type='submit'>Add contact</BtnAddContact>
        </FormGeneral>
        )
    }
}

export default ContactForm;