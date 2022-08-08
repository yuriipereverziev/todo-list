import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    this.props.onSearchChange(term);
  };

  render() {
    // eslint-disable-next-line max-len,react/destructuring-assignment
    return <input className="search-input" placeholder="search" value={this.state.term} onChange={this.onSearchChange} />;
  }
}
