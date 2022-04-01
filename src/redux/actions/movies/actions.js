import actionsTypes from './actionsTypes';
import MoviesAPI from '../../../api/moviesAPI';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const {
  NOW_PLAYING_ACTION_TYPE,
  POPULAR_ACTION_TYPE,
  TOP_RATED_ACTION_TYPE,
  UPCOMING_ACTION_TYPE,
} = actionsTypes;

const moviesAPI = new MoviesAPI(baseURL);

const getNowPlaying = () => (dispatch) => {
  moviesAPI.getNowPlaying().then((payload) => dispatch({
    type: NOW_PLAYING_ACTION_TYPE,
    payload,
  }));
};

const getPopular = () => (dispatch) => {
  moviesAPI.getPopular().then((payload) => dispatch({
    type: POPULAR_ACTION_TYPE,
    payload,
  }));
};

const getTopRated = () => (dispatch) => {
  moviesAPI.getTopRated().then((payload) => dispatch({
    type: TOP_RATED_ACTION_TYPE,
    payload,
  }));
};

const getUpcoming = () => (dispatch) => {
  moviesAPI.getUpcoming().then((payload) => dispatch({
    type: UPCOMING_ACTION_TYPE,
    payload,
  }));
};

const actions = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
};

export default actions;
