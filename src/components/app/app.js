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
      this.addItem( 'Drink coffee' ),
      this.addItem( 'Fall asleep' ),
      this.addItem( 'Find Project' )
    ]
  };

  addItem( label ) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  toggleProperty( arr, id, propName ) {
    const idx = arr.findIndex( ( el ) => el.id === id );

    const oldItem = arr[ idx ];
    const newItem = { ...oldItem, [ propName ]: !oldItem[ propName ] };

    return [
      ...arr.slice( 0, idx ),
      newItem,
      ...arr.slice( idx + 1 )
    ];


  }

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

    const newItem = this.addItem( text );

    this.setState( ( { todoData } ) => {
      const newState = [ ...todoData, newItem ];
      return {
        todoData: newState
      };
    } );
  };

  onToggleImportant = ( id ) => {
    this.setState( ( { todoData } ) => {
      return {
        todoData: this.toggleProperty( todoData, id, 'important' )
      };
    } );
  };

  onToggleDone = ( id ) => {
    this.setState( ( { todoData } ) => {
      return {
        todoData: this.toggleProperty( todoData, id, 'done' )
      };
    } );
  };


  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter( el => el.done ).length;
    const todoCount = todoData.length - doneCount;

    return (
        <div className='todo-app'>
          <AppHeader todo={ todoCount } done={ doneCount }/>
          <div className='top-panel d-flex'>
            <SearchPanel/>
            <ItemStatusFilter/>
          </div>

          <TodoList todos={ this.state.todoData }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
          />
          <AddItem onAdd={ ( text ) => {
            this.createItem( text );
          } }/>
        </div>
    );
  }
}
