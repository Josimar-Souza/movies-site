import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions/series/actions';
import SeriesHero from '../../components/SeriesHero';
import ItemsSection from '../../components/ItemsSection';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

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
          <Header />
          <SeriesHero serie={series.popular[randomIndex]} />
          <ItemsSection
            title="Séries com episódios hoje"
            items={series.airingToday}
            type="series"
          />
          <ItemsSection
            title="Séries com episódios essa semana"
            items={series.onTheAir}
            type="series"
          />
          <ItemsSection
            title="Séries populares"
            items={series.popular}
            type="series"
          />
          <ItemsSection
            title="Séries mais votadas"
            items={series.topRated}
            type="series"
          />
        </section>
      );
    }

    return (
      <Loading />
    );
  };

  return (
    <section>
      {getSeriesPage()}
    </section>
  );
}

export default SeriesPage;
