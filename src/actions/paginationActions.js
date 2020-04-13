import {
  SHOW_INITIAL_LOCATIONS,
  SHOW_NEXT_LOCATIONS,
  SHOW_PREV_LOCATIONS,
  PAGINATION_PAGE_INC,
  PAGINATION_PAGE_DEC,
  SET_CURRENT_PAGE,
  SHOW_CHOSEN_LOCATIONS
} from '../constants';

/**
 * Adding locations to fist pagination page
 *
 * @param locations | object
 *
 * @return object
 */
export function addingFirstLocations ( locations ) {
  return {
    type: SHOW_INITIAL_LOCATIONS,
    payload: locations
  }
}

/**
 * Show next locations if called this action
 *
 * @param data | object
 *
 * @return object
 */
export function showNextLocations ( data ) {
  return {
    type: SHOW_NEXT_LOCATIONS,
    payload: data
  }
}

/**
 * Next pagination page
 *
 * @param currentPage | int
 *
 * @return object
 */
export function incCurrentPageNumb( currentPage ) {
  return {
    type: PAGINATION_PAGE_INC,
    payload: currentPage
  }
}

/**
 * Show previous locations if called this action
 *
 * @param data | object
 *
 * @return object
 */
export function showPrevLocations( data ) {
  return {
    type: SHOW_PREV_LOCATIONS,
    payload: data
  }
}

/**
 * Previous pagination page
 *
 * @param currentPage | int
 *
 * @return object
 */
export function decCurrentPageNumb( currentPage ) {
  return {
    type: PAGINATION_PAGE_DEC,
    payload: currentPage
  }
}

/**
 * Set page number manually
 *
 * @param newPage | int
 *
 * @return object
 */
export function setCurrentPageNumb( newPage ) {
  return {
    type: SET_CURRENT_PAGE,
    payload: newPage
  }
}

/**
 * Show locations on the chosen page
 *
 * @param data | object
 *
 * @return object
 */
export function showChosenLocations( data ) {
  return {
    type: SHOW_CHOSEN_LOCATIONS,
    payload: data
  }
}