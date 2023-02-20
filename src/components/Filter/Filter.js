import React, { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    return (
      <div className={css.filterArea}>
        <label className={css.inputTitle} htmlFor="filterInput">
          Find contacts by name
        </label>
        <input
          onChange={this.props.onFilter}
          id="filterInput"
          type="text"
          name="filter"
          className={css.filterInput}
        ></input>
      </div>
    );
  }
}
