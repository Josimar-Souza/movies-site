import { combineReducers } from 'redux';
import movieReducer from './movies';

const rootReducer = combineReducers([movieReducer]);

export default rootReducer;
