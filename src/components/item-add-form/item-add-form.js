import React, { Component } from 'react';
import './item-add-form.css';
import PropTypes from 'prop-types';

export default class ItemAddForm extends Component {
  render() {
    const { onAdded } = this.props;
    return (
      <div className="item-add-form">
        <button
          onClick={() => onAdded('hello world')}
          className="btn btn-outline-secondary"
          type="button"
        >
          Add Item
        </button>
      </div>
    );
  }
}

ItemAddForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
};
