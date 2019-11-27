import { ADD_PLACE, REMOVE_PLACE } from '../constants';

/**
 * Adding new location
 *
 * @param location | object
 *
 * @return object
 */
export function addLocation( location ) {
  return {
    type: ADD_PLACE,
    payload: location
  }
}

/**
 * Deleting existing location
 *
 * @param location | object
 *
 * @return object
 */
export function removeLocation( location ) {
  return {
    type: REMOVE_PLACE,
    payload: location
  }
}