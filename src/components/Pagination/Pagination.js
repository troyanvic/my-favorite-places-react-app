import React, { Component } from 'react';
import { connect }          from 'react-redux';

// constants
import { PLACES_PER_PAGE, PAGINATION_START_PAGE } from '../../constants';

// actions
import { incCurrentPageNumb } from '../../actions/paginationActions';

// middleware
import { showSelectedPageMiddleware } from '../../middleware/pagination';

// component
import PaginationPrev from './PaginationPrev';
import PaginationNext from './PaginationNext';

class Pagination extends Component {
  /**
   * Component Did Mount method
   */
  componentDidMount () {
    this.props.incCurrPageNumb( PAGINATION_START_PAGE );
  };

  /**
   * Processing click to the pagination item
   */
  handleClick = ( index ) => {
    const { savedLocations, selectPage } = this.props;

    selectPage({
      selectedPageNumb: index,
      savedLocations
    });
  };

  /**
   * Custom method for getting pagination items
   *
   * @return array
   */
  getPaginationItem = () => {
    let { currentPage, savedLocations } = this.props,
        paginationItem = [],
        amount         = savedLocations.length / PLACES_PER_PAGE;

    for ( let i = 1; i <= Math.ceil( amount ); i++ ) {
      let item = i === currentPage ? <li className="pagination__item pagination__item--active">{ i }</li> : <li className="pagination__item" onClick={ () => this.handleClick( i ) }>{ i }</li>;

      paginationItem.push( item );
    }

    return paginationItem;
  };

  /**
   * Render method
   */
  render() {
    if ( this.props.savedLocations.length > PLACES_PER_PAGE ) {
      return (
        <ul className="pagination">
          <PaginationPrev />
          { this.getPaginationItem() }
          <PaginationNext />
        </ul>
      )
    } else return false;
  }
}

// store
const mapStateToProps = store => ({
  savedLocations: store.savedLocations,
  currentPage: store.paginationCurrentPage
});

const mapDispatchToProps = {
  incCurrPageNumb: incCurrentPageNumb,
  selectPage: showSelectedPageMiddleware
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Pagination );