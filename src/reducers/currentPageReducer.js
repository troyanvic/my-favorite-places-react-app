// constants
import {
  PAGINATION_START_PAGE,
  PAGINATION_PAGE_INC,
  PAGINATION_PAGE_DEC,
  SET_CURRENT_PAGE
} from '../constants';

export default ( currentPage = PAGINATION_START_PAGE, action ) => {
  const { type, payload } = action;

  switch ( type ) {
    case PAGINATION_PAGE_INC:
      return payload + 1;

    case PAGINATION_PAGE_DEC:
      return payload - 1;

    case SET_CURRENT_PAGE:
      return payload;

    default:
      return currentPage;
  }
}