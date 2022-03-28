import actionsTypes from './actionsTypes';
import MoviesAPI from '../../../api/moviesAPI';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const {
  NOW_PLAYING,
  POPULAR,
  TOP_RATED,
} = actionsTypes;
const moviesAPI = new MoviesAPI(baseURL);

const getNowPlaying = () => (dispatch) => {
  moviesAPI.getNowPlaying().then((payload) => dispatch({
    type: NOW_PLAYING,
    payload,
  }));
};

const getPopular = () => (dispatch) => {
  moviesAPI.getPopular().then((payload) => dispatch({
    type: POPULAR,
    payload,
  }));
};

const getTopRated = () => (dispatch) => {
  moviesAPI.getTopRated().then((payload) => dispatch({
    type: TOP_RATED,
    payload,
  }));
};

const actions = {
  getNowPlaying,
  getPopular,
  getTopRated,
};

export default actions;
