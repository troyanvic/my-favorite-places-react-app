import { CHANGE_PLACE } from '../constants';

/*
 * Change current place
 */
export function changeCurrentPlace( currentPlace ) {
  return {
    type: CHANGE_PLACE,
    payload: currentPlace
  }
}