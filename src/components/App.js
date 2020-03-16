import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// route components
import Home      from './routeComponents/Home';
import Locations from './routeComponents/Locations';

// style
import '../styles/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact
                 path={ '/' }
                 render={ ( props ) => <Home { ...props } /> } />

          <Route exact
                 path={ '/locations' }
                 render={ ( props ) => <Locations { ...props } /> } />
        </Switch>
      </Router>
    )
  }
}

export default App;