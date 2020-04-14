import React, { Component } from 'react';

// components
import Header         from '../../Header/Header';
import Footer         from '../../Footer/Footer';
import SavedLocations from '../../SavedLocatoins/SavedLocatoins';

class Locations extends Component {
  componentDidMount() {
    // Change page title
    document.title = this.props.title;
  }

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