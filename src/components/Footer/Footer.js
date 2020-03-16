import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const currDate = new Date();

    return (
      <footer className="footer">
        <p className="footer__copyright">&copy; <a href="https://github.com/troyanvic" title="Troyan Vic's Github profile" target="_blank" rel="noopener noreferrer">Troyan Vic</a>, { currDate.getFullYear() }</p>
      </footer>
    );
  }
}

export default Footer;