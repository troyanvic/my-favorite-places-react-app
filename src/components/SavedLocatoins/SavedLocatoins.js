import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Redirect }         from 'react-router-dom';

// constants
import { PLACES_PER_PAGE } from '../../constants';

// components
import LocationItem from '../LocationList/LocationItem';
import Pagination   from '../Pagination/Pagination';

// actions
import { addingFirstLocations } from '../../actions/paginationActions';

class SavedLocations extends  Component {
  /**
   * Component Did Mount method
   */
  componentDidMount () {
    let { savedLocations, locationsToShow } = this.props;

    locationsToShow( savedLocations );
  };

  /**
   * Render method
   */
  render() {
    let { savedLocations, currentPage } = this.props,
        savedLocationsLen   = savedLocations.length,
        locationExpression  = currentPage * PLACES_PER_PAGE,
        viewedLocationsNumb = locationExpression <= savedLocationsLen ? locationExpression : savedLocationsLen;

    // if there are not saved locations redirect to home page
    if ( savedLocationsLen > 0 ) {
      return (
        <section className="saved-locations">
          <h2 className="saved-locations__title">Locations { viewedLocationsNumb } / { savedLocationsLen }</h2>
          { this.getLocationsItem }
          <Pagination />
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
            this.props.showedLocations.map( ( location ) => {
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
  savedLocations: store.savedLocations,
  showedLocations: store.showedLocations,
  currentPage: store.paginationCurrentPage
});

const mapDispatchToProps = {
  locationsToShow: addingFirstLocations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( SavedLocations );