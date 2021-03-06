import actionsTypes from './actionsTypes';
import SeriesAPI from '../../../api/seriesAPI';

const {
  SERIES_AIRING_TODAY,
  SERIES_ON_THE_AIR,
  SERIES_POPULAR,
  SERIES_TOP_RATED,
} = actionsTypes;

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const seriesAPI = new SeriesAPI(baseURL);

const getAiringToday = () => (dispatch) => {
  seriesAPI.getAiringToday().then((payload) => dispatch({
    type: SERIES_AIRING_TODAY,
    payload,
  }));
};

const getOnTheAir = () => (dispatch) => {
  seriesAPI.getOnTheAir().then((payload) => dispatch({
    type: SERIES_ON_THE_AIR,
    payload,
  }));
};

const getPopular = () => (dispatch) => {
  seriesAPI.getPopular().then((payload) => dispatch({
    type: SERIES_POPULAR,
    payload,
  }));
};

const getTopRated = () => (dispatch) => {
  seriesAPI.getTopRated().then((payload) => dispatch({
    type: SERIES_TOP_RATED,
    payload,
  }));
};

const actions = {
  getAiringToday,
  getOnTheAir,
  getPopular,
  getTopRated,
};

export default actions;
