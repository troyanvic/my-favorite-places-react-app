import React, { Component } from 'react';

class Header extends Component {
  handleBack = ( history ) => {
    history.goBack();
  };

  render() {
    let { location, history } = this.props.props;

    if ( location.pathname === '/' ) {
      return (
        <header className="header">
          <h1 className="header__title">My favorite places</h1>
        </header>
      );
    } else {
      return (
        <header className="header">
          <h1 className="header__title">
            <div className="header__title--back"
                 onClick={ () => this.handleBack( history ) }>
              <span className="header__title--back__icon" />
            </div>My favorite places
          </h1>
        </header>
      )
    }
  }
}

export default Header;