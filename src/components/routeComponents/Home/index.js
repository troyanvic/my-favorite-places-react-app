import React, { Component } from 'react';

// components
import Header          from '../../Header/Header';
import Search          from '../../Search/Search';
import Map             from '../../Map/Map';
import CurrentLocation from '../../CurrentLocation/CurrentLocation';
import LocationList    from '../../LocationList/LocationList';
import Footer          from '../../Footer/Footer';

class Home extends Component {
  componentDidMount() {
    // Change page title
    document.title = this.props.title;
  }

  render() {
    return(
      <div className="app">
        <Header props={ this.props } />
        <Search />
        <Map />
        <CurrentLocation />
        <LocationList />
        <Footer />
      </div>
    )
  }
}

export default Home;