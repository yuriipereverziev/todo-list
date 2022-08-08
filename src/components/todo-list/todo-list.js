import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
  todos, onDeleted, onToggleDone, onToggleImportant 
}) => {
  const elements = todos.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem
          done={item.done}
          label={item.label}
          important={item.important}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
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
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
};

export default TodoList;
