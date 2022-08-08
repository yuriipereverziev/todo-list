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
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={label}
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
