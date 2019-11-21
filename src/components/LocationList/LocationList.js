import React, { Component } from 'react';
import { connect }          from 'react-redux';

// components
import LocationItem from './LocationItem';

class LocationList extends Component {
  render() {
    return (
      <section className="saved-locations">
        <h2 className="saved-locations__title">Your Favorite Locations</h2>
        { this.props.savedLocations.length > 0 ? this.getLocationsItem : <p className="saved-locations__no-locations">You have no saved locations yet :(</p> }
      </section>
    )
  }

  /**
   * Get method for getting locations items
   */
  get getLocationsItem () {
    return (
      <ul className="saved-locations__list">
        {
          this.props.savedLocations.map( location => {
            const { lat, lng } = location;

            return <LocationItem key={ lat + lng } locationProps={ location } />
          })
        }
      </ul>
    )
  }
}

// store
const mapStateToProps = store => ({
  savedLocations: store.savedLocations
});

export default connect(
  mapStateToProps
)( LocationList );