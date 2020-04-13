import React, { Component } from 'react';
import { connect }          from 'react-redux';

// constants
import { PLACES_PER_PAGE } from '../../constants';

// actions
import { showNextPageMiddleware } from '../../middleware/pagination';

class PaginationNext extends Component {
  /**
   * Processing to click on the Next button
   */
  handleClick = () => {
    let { savedLocations, paginationCurrPage, showNextPage } = this.props;

    showNextPage( { savedLocations, paginationCurrPage } );
  };

  /**
   * Render method
   *
   * @return html
   */
  render() {
    let { paginationCurrPage, savedLocations } = this.props,
        pagesNumb = Math.ceil( savedLocations.length / PLACES_PER_PAGE );

    if ( paginationCurrPage < pagesNumb ) {
      return (
        <li className="pagination__item pagination__item--next"
            onClick={ this.handleClick }>
          <span className="pagination__icon pagination__icon--right" />
        </li>
      );
    } else {
      return (
        <li className="pagination__item pagination__item--inactive">
          <span className="pagination__icon pagination__icon--right" />
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
  showNextPage: showNextPageMiddleware
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( PaginationNext );