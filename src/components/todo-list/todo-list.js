import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem 
          label={item.label}
          important={item.important}
          onDeleted={() => onDeleted(item.id)}
        />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleted: PropTypes.func.isRequired,
};

export default TodoList;
