import { createStore } from 'redux';
import reducer         from '../reducers';

const store = createStore( reducer );

// remove it after move to the production
window.store = store;

export default store;