import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentLocation extends Component{
  render() {
    return (
      <section className="location">
        <div className="location__container">
          <span className="location__name">{ this.props.currentLocation }</span>
          <button className="location__button"
                  type="button" />
        </div>
      </section>
    )
  }
}

// store
const mapStateToProps = store => ( { currentLocation: store.currentPoint.location } );

export default connect(
  mapStateToProps
)( CurrentLocation );