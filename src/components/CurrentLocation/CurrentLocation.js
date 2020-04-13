import React, { Component } from 'react';
import { connect }          from 'react-redux';

// actions
import { addLocation, removeLocation } from '../../actions/locationActions';

class CurrentLocation extends Component {
  /**
   * Processing click to star button.
   * Call to save location to the store or removing location from the store
   *
   * @param location | object
   * @param star | bool
   */
  handleClick = ( location, star ) => {
    if ( star ) {
      this.props.removeLocation( location );
    } else this.props.addLocation( location );
  };

  /**
   * Render method
   *
   * @return html
   */
  render() {
    const { currentLocation, currentLocationObj, savedLocations } = this.props;
    const { lat: currentLat, lng: currentLng } = currentLocationObj;
    let star = false;

    savedLocations.forEach( location => {
      const { lat, lng, added } = location;

      if ( lat === currentLat && lng === currentLng ) star = added;
    });

    return (
      <section className="location">
        <div className="location__container">
          <span className="location__name">{ currentLocation }</span>
          <button className={ star ? 'location__button location__button--saved' : 'location__button location__button--unsaved' }
                  type="button"
                  onClick={ () => this.handleClick( currentLocationObj, star ) } />
        </div>
      </section>
    )
  }
}

// store
const mapStateToProps = store => ({
  currentLocation: store.currentPoint.location,
  currentLocationObj: store.currentPoint,
  savedLocations: store.savedLocations
});

const mapDispatchToProps = {
  addLocation: addLocation,
  removeLocation: removeLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( CurrentLocation );