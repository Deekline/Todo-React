import React from 'react';
import './search-panel.css';


export default class SearchPanel extends React.Component {

  state = {
    term: ''
  };

  searchForm = ( event ) => {
    const term = event.target.value;

    this.setState( { term } );

    this.props.onSearch( term );
  };


  render() {
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               value={ this.state.term }
               onChange={ this.searchForm }
        />
    );
  }
}

