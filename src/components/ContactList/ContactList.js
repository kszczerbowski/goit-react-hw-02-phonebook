import React, { Component } from 'react';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.contacts} id="contactsList">
        {this.props.children}
      </ul>
    );
  }
}
