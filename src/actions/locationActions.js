import { ADD_PLACE } from '../constants';

/**
 * Adding new location
 *
 * @param location | object
 */
export function addLocation( location ) {
  return {
    type: ADD_PLACE,
    payload: location
  }
}