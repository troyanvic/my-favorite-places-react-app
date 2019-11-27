import React, { Component } from 'react';

class LocationItem extends Component {
  render() {
    return (
      <li className="saved-locations__list--item">
        { this.props.locationProps.location }
        <span className="saved-locations__list--item__icon" />
      </li>
    )
  }
}

export default LocationItem;