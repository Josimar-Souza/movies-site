import actionsTypes from '../../actions/series/actionsTypes';

const {
  SERIES_AIRING_TODAY,
  SERIES_ON_THE_AIR,
  SERIES_POPULAR,
  SERIES_TOP_RATED,
} = actionsTypes;

const INITIAL_STATE = {
  series: {
    airingToday: [],
    onTheAir: [],
    popular: [],
    topRated: [],
  },
};

const seriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SERIES_AIRING_TODAY:
      return {
        ...state,
        series: {
          ...state.series,
          airingToday: action.payload,
        },
      };
    case SERIES_ON_THE_AIR:
      return {
        ...state,
        series: {
          ...state.series,
          onTheAir: action.payload,
        },
      };
    case SERIES_POPULAR:
      return {
        ...state,
        series: {
          ...state.series,
          popular: action.payload,
        },
      };
    case SERIES_TOP_RATED:
      return {
        ...state,
        series: {
          ...state.series,
          topRated: action.payload,
        },
      };
    default:
      return state;
  }
};

export default seriesReducer;
