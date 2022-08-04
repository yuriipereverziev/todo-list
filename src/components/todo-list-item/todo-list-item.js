import React from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };

  return (
    <span className="todo-list-item">
      <span
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
        <i className="fa fa-trash" />
      </button>
    </span>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
};

export default TodoListItem;
