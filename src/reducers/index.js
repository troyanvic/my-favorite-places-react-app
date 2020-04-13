import { combineReducers } from 'redux';

// reducers
import currentPointReducer    from './currentPointReducer';
import addedLocationsReducer  from './addedLocationsReducer';
import showedLocationsReducer from './showedLocationsReducer';
import currentPageReducer     from './currentPageReducer';

export default combineReducers({
  currentPoint: currentPointReducer,
  savedLocations: addedLocationsReducer,
  showedLocations: showedLocationsReducer,
  paginationCurrentPage: currentPageReducer
});