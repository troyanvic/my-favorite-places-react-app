import { CHANGE_PLACE } from '../constants';

/**
 * Change current place
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