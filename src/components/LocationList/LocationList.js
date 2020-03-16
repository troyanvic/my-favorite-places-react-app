import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';

// components
import LocationItem from './LocationItem';

class LocationList extends Component {
  render() {
    return (
      <section className="saved-locations">
        <h2 className="saved-locations__title">Recently Added Locations</h2>
        { this.props.savedLocations.length > 0 ? this.getLocationsItem : <p className="saved-locations__no-locations">You have no saved locations yet :(</p> }
      </section>
    )
  }

  /**
   * Get method for getting locations items
   *
   * @return html
   */
  get getLocationsItem () {
    let moreLocationItems = 0;

    return (
      <div className="saved-locations__list--wrapper">
        <ul className="saved-locations__list">
          {
            this.props.savedLocations.map( ( location, i ) => {
              const { lat, lng } = location;

              moreLocationItems = i;

              if ( i <= 2 ) {
                return <LocationItem key={ lat + lng } locationProps={ location } />;
              } else return false;
            })
          }
        </ul>

        { moreLocationItems >= 3 ? <Link className="saved-locations__more" to="/locations">Show all locations</Link> : false }
      </div>
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