import React, { Component } from 'react';

// components
import LocationItem from './LocationItem';

class LocationList extends Component{
    render() {
        return (
            <div className="location-list">
                <div>Location List component</div>
                <LocationItem />
            </div>
        )
    }
}

export default LocationList;