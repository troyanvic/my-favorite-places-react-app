import { CHANGE_PLACE } from '../constants';

/**
 * Change current location
 *
 * @param currentPlace | object
 *
 * @return object
 */
export function changeCurrentPlace( currentPlace ) {
  return {
    type: CHANGE_PLACE,
    payload: currentPlace
  }
}