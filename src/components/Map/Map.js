import React, { Component }                 from 'react';
import { connect }                          from 'react-redux';
import { compose, withProps }               from 'recompose';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

/*
 * Create map element with HOC
 *
 * @return React Component
 */
const MapElement = compose(
  withProps({
    containerElement: <section className="map" />,
    mapElement: <div className="map__element" />
  }),
  withGoogleMap
)( props => {
  let { isMarkerShown, lat, lng } = props;

  return <GoogleMap defaultZoom={ 8 }
                    defaultCenter={ { lat, lng} }
                    center={ { lat, lng } }>
    { isMarkerShown && ( <Marker position={ { lat, lng } } /> ) }
  </GoogleMap>
});

class Map extends Component {
  render() {
    let { lat, lng } = this.props.currentPlace;

    return <MapElement isMarkerShown lat={ lat } lng={ lng } />;
  }
}

// store
const mapStateToProps = store => ( { currentPlace: store.currentPoint } );

export default connect(
  mapStateToProps
)( Map );