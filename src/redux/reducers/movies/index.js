import actionsTypes from '../../actions/movies/actionsTypes';

const { MOVIES_NOW_PLAYING } = actionsTypes;

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
    case MOVIES_NOW_PLAYING:
      return {
        ...state,
        movies: {
          ...state.movies,
          nowPlaying: action.payload,
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
