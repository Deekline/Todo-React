import React from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-items/add-items';


export default class App extends React.Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'drink coffee', important: false, id: 1 },
      { label: 'make awesome app', important: true, id: 2 },
      { label: 'have a launch', important: false, id: 3 }
    ]
  };

  deleteItem = ( id ) => {
    this.setState( ( { todoData } ) => {

      const idx = todoData.findIndex( ( el ) => el.id === id );

      const newState = [ ...todoData.slice( 0, idx ), ...todoData.slice( idx + 1 ) ];

      return {
        todoData: newState
      };
    } );
  };

  createItem = ( text ) => {

    const newItem = { label: text, important: false, id: this.maxId++ };

    this.setState( ( { todoData } ) => {
      const newState = [ ...todoData, newItem ];
      return {
        todoData: newState
      };
    } );
  };

  onToggleImportant = (id) => {
  console.log(id)
  }

  onToggleDone = (id) => {
console.log(id)
  }


  render() {

    return (
        <div className='todo-app'>
          <AppHeader todo={ 1 } done={ 3 }/>
          <div className='top-panel d-flex'>
            <SearchPanel/>
            <ItemStatusFilter/>
          </div>

          <TodoList todos={ this.state.todoData }
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
          />
          <AddItem onAdd={ ( text ) => {
            this.createItem( text );
          } }/>
        </div>
    );
  }
}
