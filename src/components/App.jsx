import css from './App.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactListElement } from './ContactListElement/ContactListElement';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  clearForm = event => {
    const form = event.currentTarget;
    form.elements.name.value = '';
    form.elements.number.value = '';
  };

  deleteContact = event => {
    const nameToDelete = event.currentTarget.previousElementSibling.textContent;
    const namesArray = this.state.contacts.map(contact => contact.name);
    const index = namesArray.indexOf(nameToDelete);
    this.setState({
      ...this.state.contacts.splice(index, 1),
    });
  };

  addContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      this.state.contacts
        .map(contact => contact.name)
        .includes(form.elements.name.value)
    ) {
      window.alert(`${form.elements.name.value} is already in contacts!`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            name: form.elements.name.value,
            number: form.elements.number.value,
            id: nanoid(),
          },
        ],
      });
    }
    this.clearForm(event);
  };

  handleFilter = event => {
    this.setState({ [event.target.name]: event.target.value });
    const contactsArray = document.querySelectorAll('#contactsList li');
    contactsArray.forEach(contact => {
      if (
        !contact.textContent
          .toLowerCase()
          .includes(event.currentTarget.value.toLowerCase())
      ) {
        contact.style.display = 'none';
      } else {
        contact.style.display = 'list-item';
      }
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList>
          {this.state.contacts.map(contact => {
            return (
              <ContactListElement
                key={contact.name}
                name={contact.name}
                number={contact.number}
                deleteContact={this.deleteContact}
              />
            );
          })}
        </ContactList>
      </div>
    );
  }
}
