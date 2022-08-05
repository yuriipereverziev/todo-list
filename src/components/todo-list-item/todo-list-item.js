import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
  };

  onLabelClick = () => {
    this.setState({
        done: true,
    })
  };

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = 'todo-list-item';
    if(done){
        classNames += ' done';
    }

    const style = {
      color: important ? 'tomato' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
    
    return (
      <span className={classNames}>
        <span
          onClick={this.onLabelClick}
          className="todo-list-item-label"
          style={style}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
};
