import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions/series/actions';
import SeriesHero from '../components/SeriesHero';
import ItemsSection from '../components/ItemsSection';

function SeriesPage() {
  const dispatch = useDispatch();
  const series = useSelector((state) => state.seriesReducer.series);
  const randomIndex = Math.floor(Math.random() * (series.popular.length - 1));

  useEffect(() => {
    dispatch(actions.getAiringToday());
    dispatch(actions.getOnTheAir());
    dispatch(actions.getPopular());
    dispatch(actions.getTopRated());
  }, []);

  const getSeriesPage = () => {
    if (series.popular.length > 0) {
      return (
        <section>
          <SeriesHero serie={series.popular[randomIndex]} />
          <ItemsSection
            title="Series com episódios hoje"
            items={series.airingToday}
            type="series"
          />
        </section>
      );
    }

    return (
      <h1>Loading...</h1>
    );
  };

  return (
    <section>
      {getSeriesPage()}
    </section>
  );
}

export default SeriesPage;
