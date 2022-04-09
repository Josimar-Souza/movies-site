import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions/series/actions';

function SeriesPage() {
  const dispatch = useDispatch();
  const series = useSelector((state) => state.seriesReducer.series);

  useEffect(() => {
    dispatch(actions.getAiringToday());
    dispatch(actions.getOnTheAir());
    dispatch(actions.getPopular());
    dispatch(actions.getTopRated());
  }, []);

  console.log(series);

  return (
    <h1>Series Page!</h1>
  );
}

export default SeriesPage;
