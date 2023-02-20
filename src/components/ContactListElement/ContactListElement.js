import React, { Component } from 'react';
import css from './ContactListElement.module.css';

export class ContactListElement extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <li>
        {name}: {number}
        <button type="button" className={css.deleteContactButton}>
          Delete
        </button>
      </li>
    );
  }
}
