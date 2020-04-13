// actions
import {
  showNextLocations,
  showPrevLocations,
  incCurrentPageNumb,
  decCurrentPageNumb,
  setCurrentPageNumb,
  showChosenLocations
} from '../actions/paginationActions';

/**
 * Show next page
 *
 * @return function
 */
export function showNextPageMiddleware( data ) {
  let { savedLocations, paginationCurrPage } = data,
      nextLocationData = { savedLocations, paginationCurrPage };

  return function ( dispatch ) {
    dispatch( showNextLocations( nextLocationData ) );
    dispatch( incCurrentPageNumb( paginationCurrPage ) );
  }
}

/**
 * Show previous page
 *
 * @return function
 */
export function showPrevPageMiddleware( data ) {
  let { savedLocations, paginationCurrPage } = data,
      prevLocationData = { savedLocations, paginationCurrPage };

  return function ( dispatch ) {
    dispatch( showPrevLocations( prevLocationData ) );
    dispatch( decCurrentPageNumb( paginationCurrPage ) );
  }
}

/**
 * Show page which was selected by user
 *
 * @return function
 */
export function showSelectedPageMiddleware( data ) {
  let { selectedPageNumb } = data;

  return function ( dispatch ) {
    dispatch( setCurrentPageNumb( selectedPageNumb ) );
    dispatch( showChosenLocations( data ) );
  }
}