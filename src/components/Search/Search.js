import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Geocode              from 'react-geocode';
import Autocomplete         from 'react-google-autocomplete';

// constants
import { GMAP_API_KEY } from '../../constants';

// actions
import { changeCurrentPlace } from '../../actions/mapActions';

class Search extends Component {
  constructor( props ) {
    super( props );

    // set Google Map API Key
    Geocode.setApiKey( GMAP_API_KEY );
  }

  /*
   * Get city name from autocomplete input value
   *
   * @param address | array
   *
   * @return string
   */
  getCity = address => {
    if ( typeof address !== 'undefined' ) {
      for ( let i = 0; i < address.length; i++ ) {
        let types = address[i].types[0];

        if ( types && 'locality' === types ) {
          return address[i].long_name;
        }
      }
    } else return '';
  };

  /*
   * Processing search autocomplete and save data to store
   *
   * @param place | object
   */
  handleSelect = place => {
    const { changePlace } = this.props;
    let address = place.address_components;

    if ( address ) {
      let location = this.getCity( address ),
          placeGeo = place.geometry.location,
          lat      = placeGeo.lat(),
          lng      = placeGeo.lng();

      // add to store
      changePlace( { location, lat, lng } );
    } else {
      let placeName = place.name;

      if ( placeName !== '' ) {
        Geocode.fromAddress( placeName ).then( response => {
            const { lat, lng } = response.results[0].geometry.location;

            // add to store
            changePlace( { location: placeName, lat, lng } );
          },
          error => {
            console.error( error );
          }
        );
      }
    }
  };

  render() {
    return (
      <section className="search">
        <Autocomplete className="search__field"
                      onPlaceSelected={ this.handleSelect }
                      types={ ['(regions)'] }
                      defaultValue={ this.props.currentPlace.location }
                      placeholder="Find a location..." />
      </section>
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