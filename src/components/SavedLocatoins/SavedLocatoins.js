import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Redirect }         from 'react-router-dom';

// components
import LocationItem from "../LocationList/LocationItem";

class SavedLocations extends  Component{
  render() {

    // if there are not saved locations redirect to home page
    if ( this.props.savedLocations.length > 0 ) {
      return (
        <section className="saved-locations">
          <h2 className="saved-locations__title">All locations</h2>
          { this.getLocationsItem }
        </section>
      )
    } else return <Redirect to="/" />
  }

  /**
   * Get method for getting locations items
   *
   * @return html
   */
  get getLocationsItem () {
    return (
      <div className="saved-locations__list--wrapper">
        <ul className="saved-locations__list">
          {
            this.props.savedLocations.map( ( location ) => {
              const { lat, lng } = location;

              return <LocationItem key={ lat + lng } locationProps={ location } />
            })
          }
        </ul>
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
)( SavedLocations );