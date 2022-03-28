import actionsTypes from '../../actions/movies/actionsTypes';

const {
  NOW_PLAYING,
  POPULAR,
  TOP_RATED,
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
    case NOW_PLAYING:
      return {
        ...state,
        movies: {
          ...state.movies,
          nowPlaying: action.payload,
        },
      };
    case POPULAR:
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: action.payload,
        },
      };
    case TOP_RATED:
      return {
        ...state,
        movies: {
          ...state.movies,
          topRated: action.payload,
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
