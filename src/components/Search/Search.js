import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Geocode              from 'react-geocode';

// constants
import { GMAP_API_KEY } from '../../constants';

// actions
import { changeCurrentPlace } from '../../actions/mapActions';

class Search extends Component {
  constructor( props ) {
    super( props );

    // refs
    this.setSearchInput = this.setSearchInput.bind( this );

    // set Google Map API Key
    Geocode.setApiKey( GMAP_API_KEY );
  }

  // set search input ref
  setSearchInput = node => this.searchInput = node;

  /*
   * Processing search action
   */
  handleSubmit = ( e ) => {
    e.preventDefault();

    const location = this.searchInput.value;

    Geocode.fromAddress( location ).then( response => {
        const { lat, lng } = response.results[0].geometry.location;

        this.props.changePlace( { location, lat, lng } );
      },
      error => {
        console.error( error );
      }
    );
  };

  render() {
    return (
      <form className="search"
            onSubmit={ this.handleSubmit }>
        <input className="search__field"
               ref={ this.setSearchInput }
               type="text"
               defaultValue={ this.props.currentPlace.location }
               placeholder="Find a location..." />
      </form>
    )
  }
}

// store
const mapStateToProps    = store => ( { currentPlace: store.currentPoint } );
const mapDispatchToProps = { changePlace: changeCurrentPlace };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Search );