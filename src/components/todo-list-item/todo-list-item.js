import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label, onDeleted, onToggleImportant, onToggleDone,
      important, done
    } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <span
          onClick={onToggleDone}
          className="todo-list-item-label"
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  important: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
};
