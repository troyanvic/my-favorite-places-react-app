import { createStore, applyMiddleware } from 'redux';
import thunk                            from 'redux-thunk';
import reducer                          from '../reducers';

const store = createStore(
  reducer,
  applyMiddleware( thunk )
);

// remove it after move to the production
window.store = store;

export default store;