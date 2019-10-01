import { combineReducers } from 'redux';

// reducers
import currentPointReducer from './currentPointReducer';

export default combineReducers({
  currentPoint: currentPointReducer
});