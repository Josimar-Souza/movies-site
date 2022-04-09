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
    default:
      return state;
  }
};

export default seriesReducer;
