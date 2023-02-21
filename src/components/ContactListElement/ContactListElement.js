import React, { Component } from 'react';
import css from './ContactListElement.module.css';
import PropTypes from 'prop-types';

export class ContactListElement extends Component {
  render() {
    const { name, number, onDeleteContact } = this.props;
    return (
      <li>
        <span id="name">{name}</span>: {number}
        <button
          onClick={onDeleteContact}
          type="button"
          className={css.deleteContactButton}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactListElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
