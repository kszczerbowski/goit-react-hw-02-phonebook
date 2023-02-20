import React, { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.contacts} id="contactsList">
        {this.props.children}
      </ul>
    );
  }
}

ContactList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
