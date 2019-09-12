import React, { Component } from 'react';

class Search extends Component {
  constructor( props ) {
    super( props );

    this.setSearchInput = this.setSearchInput.bind( this );

    this.state = {
      location: 'Kiev'
    }
  }

  // set search input ref
  setSearchInput = node => this.searchInput = node;

  // processing search
  handleSubmit = ( e ) => {
    e.preventDefault();

    this.setState( { location: this.searchInput.value } );
  };

  render() {
    return (
      <form className="search"
            onSubmit={ this.handleSubmit }>
        <input className="search__field"
               ref={ this.setSearchInput }
               type="text"
               defaultValue={ this.state.location }
               placeholder="Find a location..." />
      </form>
    )
  }
}

export default Search;