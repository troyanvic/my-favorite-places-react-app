import React, { Component } from 'react';

// components
import Header         from '../../Header/Header';
import Footer         from '../../Footer/Footer';
import SavedLocations from '../../SavedLocatoins/SavedLocatoins';

class Locations extends Component {
  render() {
    return(
      <div className="app">
        <Header props={ this.props } />
        <SavedLocations />
        <Footer />
      </div>
    )
  }
}

export default Locations;