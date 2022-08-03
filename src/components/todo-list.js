import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem 
          label={item.label}
          important={item.important}
        />
      </li>
    );
  });
  return (
    <ul>
      { elements }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TodoList;
