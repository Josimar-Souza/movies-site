import { combineReducers } from 'redux';
import movieReducer from './movies';
import seriesReducer from './series';

const rootReducer = combineReducers({ movieReducer, seriesReducer });

export default rootReducer;
