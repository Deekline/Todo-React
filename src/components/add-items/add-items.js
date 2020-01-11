import React from 'react';

import './add-items.css';

export default class AddItem extends React.Component {

  state = {
    label: ''
  };

  onLabelChange = ( event ) => {
    this.setState( {
      label: event.target.value
    } );
  };

  onSubmit = ( event ) => {
    event.preventDefault();
    this.props.onAdd( this.state.label );
    this.setState( {
      label: ''
    } );
  };

  render() {

    return (

        <form className='item-add-form'
              onSubmit={ this.onSubmit }
        >
          <input type="text"
                 className='form-control'
                 onChange={ this.onLabelChange }
                 placeholder='What needs to be done'
                 value={ this.state.label }
          />
          <button className='btn btn-outline-secondary'>
            Add new task
          </button>
        </form>

    );
  }
}
