import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Build React App', important: true },
      { id: 3, label: 'Have a lunch', important: false },
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
