import React, { Component } from 'react';

// components
import Search          from './Search';
import Map             from './Map';
import CurrentLocation from './CurrentLocation';
import LocationList    from './LocationList';

// style
import '../styles/main.scss';

class App extends Component{
    render() {
        return (
            <div className="app">
                <h1 className="app__title">My favorite places</h1>
                <Search />
                <Map />
                <CurrentLocation />
                <LocationList />
            </div>
        )
    }
}

export default App;