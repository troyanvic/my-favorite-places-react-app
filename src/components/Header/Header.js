import React, { Component } from 'react';

class Header extends Component {
  /**
   * Processing to click on the back button
   */
  handleClick = ( history ) => {
    history.goBack();
  };

  /**
   * Render method
   */
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
            <span className="header__title--back"
                 onClick={ () => this.handleClick( history ) }>
              <span className="header__title--back__icon" />
            </span>My favorite places
          </h1>
        </header>
      )
    }
  }
}

export default Header;