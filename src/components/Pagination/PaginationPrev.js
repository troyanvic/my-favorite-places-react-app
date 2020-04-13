import React, { Component } from 'react';
import { connect }          from 'react-redux';

// middleware
import { showPrevPageMiddleware } from '../../middleware/pagination';

class PaginationPrev extends Component {
  /**
   * Processing to click on the Prev button
   */
  handleClick = () => {
    let { savedLocations, paginationCurrPage, showPrevPage } = this.props;

    showPrevPage( { savedLocations, paginationCurrPage } );
  };

  /**
   * Render method
   *
   * @return html
   */
  render() {
    if ( this.props.paginationCurrPage > 1 ) {
      return (
        <li className="pagination__item pagination__item--prev"
            onClick={ this.handleClick }>
          <span className="pagination__icon pagination__icon--left" />
        </li>
      );
    } else {
      return (
        <li className="pagination__item pagination__item--inactive">
          <span className="pagination__icon pagination__icon--left" />
        </li>
      );
    }
  }
}

// store
const mapStateToProps = store => ({
  savedLocations: store.savedLocations,
  paginationCurrPage: store.paginationCurrentPage
});

const mapDispatchToProps = {
  showPrevPage: showPrevPageMiddleware
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( PaginationPrev );