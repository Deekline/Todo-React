import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'



const TodoList = ( { todos } ) => {

  const element = todos.map( ( todo ) => {

    let { id, ...itemProps } = todo;

    return (
        <li key={ id } className='list-group-item'>
          <TodoListItem { ...itemProps }/>
        </li>
    );
  } );

  return (
      <ul className='list-group todo-list'>
        { element }
      </ul>
  );
};


export default TodoList;