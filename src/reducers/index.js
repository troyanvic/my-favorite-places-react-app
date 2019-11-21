import { combineReducers } from 'redux';

// reducers
import currentPointReducer   from './currentPointReducer';
import addedLocationsReducer from './addedLocationsReducer';

export default combineReducers({
  currentPoint: currentPointReducer,
  savedLocations: addedLocationsReducer
});