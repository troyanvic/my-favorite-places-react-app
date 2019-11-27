import React, { Component } from 'react';
import { connect }          from 'react-redux';

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
    let moreLocationItems = false;

    return (
      <div className="saved-locations__list--wrapper">
        <ul className="saved-locations__list">
          {
            this.props.savedLocations.map( ( location, i ) => {
              const { lat, lng } = location;

              if ( i <= 2 ) return <LocationItem key={ lat + lng } locationProps={ location } />;
              else {
                moreLocationItems = !moreLocationItems;
                return false;
              }
            })
          }
        </ul>

        { moreLocationItems ? <button className="saved-locations__more">Show all locations</button> : false }
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