import React, { Component } from 'react';
import { connect }          from 'react-redux';

// actions
import { addLocation } from '../../actions/locationActions';

class CurrentLocation extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      star: false
    }
  }

  shouldComponentUpdate( prevProps, prevState ) {
    const { lat: currentPointLat, lng: currentPointLng } = prevProps.currentLocationObj;

    this.props.savedLocations.forEach( location => {
      const { lat, lng } = location;
      const { star } = this.state;

      if ( lat === currentPointLat && lng === currentPointLng && prevState.star === star ) {
        this.setState( { star: !star } );
      }
    });

    return true;
  }

  /**
   * Processing click to star button.
   * Call adding location to store or removing location to store
   *
   * @param location | object
   * @param star | bool
   */
  handleClick = ( location, star ) => {
    //if ( !star ) {
      //this.setState(
        //() => ( { star: !star } ),
        /*() => */this.props.addLocation( location );
      /*);
    }*/
  };

  render() {
    const { currentLocation, currentLocationObj } = this.props;
    const { star } = this.state;

    return (
      <section className="location">
        <div className="location__container">
          <span className="location__name">{ currentLocation }</span>
          <button className={ star ? 'location__button location__button--saved' : 'location__button location__button--unsaved' }
                  type="button"
                  onClick={ () => this.handleClick( currentLocationObj, star ) }/>
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

const mapDispatchToProps = { addLocation: addLocation };

export default connect(
  mapStateToProps,
    mapDispatchToProps
)( CurrentLocation );