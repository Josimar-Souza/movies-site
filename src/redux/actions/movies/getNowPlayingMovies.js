import actionsTypes from './actionsTypes';
import MoviesAPI from '../../../api/moviesAPI';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const { MOVIES_NOW_PLAYING } = actionsTypes;
const moviesAPI = new MoviesAPI(baseURL);

const getNowPlayingMovies = () => (dispatch) => {
  moviesAPI.getNowPlaying().then((payload) => dispatch({
    type: MOVIES_NOW_PLAYING,
    payload,
  }));
};

export default getNowPlayingMovies;
