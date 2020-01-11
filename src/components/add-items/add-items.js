import React from 'react';

import './add-items.css';

export default class AddItem extends React.Component {


  render() {
    const { onAdd } = this.props;

    return (
        <div className='item-add-form'>
          <input type="text" className='form-control'/>
          <button className='btn btn-outline-secondary'
                  onClick={ () => onAdd('hello') }>
            Add new task
          </button>
        </div>

    );
  }
}
