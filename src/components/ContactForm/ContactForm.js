import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  render() {
    return (
      <div className={css.inputArea}>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="nameInput" className={css.inputTitle}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="nameInput"
            className={css.nameInput}
          />
          <label htmlFor="phoneInput" className={css.inputTitle}>
            Phone number
          </label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="phoneInput"
            className={css.phoneInput}
          />
          <button type="submit" className={css.addContactButton}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
