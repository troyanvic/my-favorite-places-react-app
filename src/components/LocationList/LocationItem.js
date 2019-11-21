import React, { Component } from 'react';

class LocationItem extends Component {
  render() {
    return <li className="saved-locations__list--item">{ this.props.locationProps.location }</li>
  }
}

export default LocationItem;