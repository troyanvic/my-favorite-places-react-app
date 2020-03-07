import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// components
import Search          from './Search';
import Map             from './Map';
import CurrentLocation from './CurrentLocation';
import LocationList    from './LocationList';
import Footer          from './Footer';

// style
import '../styles/main.scss';

class App extends Component{
    render() {
        return (
          <Router>
            <Switch>
              <Route exact
                     path={ '/' }
                     render={ () =>
                       <div className="app">
                         <h1 className="app__title">My favorite places</h1>
                         <Search />
                         <Map />
                         <CurrentLocation />
                         <LocationList />
                         <Footer />
                       </div>
                     } />

              <Route exact
                     path={ '/locations' }
                     render={ () =>
                       <div className="app">
                         <h1 className="app__title">My favorite places</h1>
                         <LocationList />
                         <Footer />
                       </div>
                     } />
            </Switch>
          </Router>
        )
    }
}

export default App;