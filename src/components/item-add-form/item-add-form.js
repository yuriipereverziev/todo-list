import React, { Component } from 'react';
import './item-add-form.css';
import PropTypes from 'prop-types';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
      this.setState({
          label: ''
      });
      console.log('1')
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>

        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
        >
          Add Item
        </button>
      </form>
    );
  }
}

ItemAddForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
};
