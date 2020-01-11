import React from 'react';
import './app.css'

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

const App = () => {
  const todoData = [
    { label: 'drink coffee', important: false, id: 1 },
    { label: 'make awesome app', important: true, id: 2 },
    { label: 'have a launch', important: false, id: 3 }
  ];
  return (
      <div className='todo-app'>
        <AppHeader todo={ 1 } done={ 3 }/>
        <div className='top-panel d-flex'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList todos={ todoData }/>
      </div>
  );
};

export default App