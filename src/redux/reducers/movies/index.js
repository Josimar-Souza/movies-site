import actionsTypes from '../../actions/movies/actionsTypes';

const {
  NOW_PLAYING_ACTION_TYPE,
  POPULAR_ACTION_TYPE,
  TOP_RATED_ACTION_TYPE,
  UPCOMING_ACTION_TYPE,
} = actionsTypes;

const INITIAL_STATE = {
  movies: {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  },
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOW_PLAYING_ACTION_TYPE:
      return {
        ...state,
        movies: {
          ...state.movies,
          nowPlaying: action.payload,
        },
      };
    case POPULAR_ACTION_TYPE:
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: action.payload,
        },
      };
    case TOP_RATED_ACTION_TYPE:
      return {
        ...state,
        movies: {
          ...state.movies,
          topRated: action.payload,
        },
      };
    case UPCOMING_ACTION_TYPE:
      return {
        ...state,
        movies: {
          ...state.movies,
          upcoming: action.payload,
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
