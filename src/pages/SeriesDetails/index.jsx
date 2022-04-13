import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SeriesDetailsStyles';
import SeriesAPI from '../../api/seriesAPI';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const seriesAPI = new SeriesAPI(baseURL);

function SeriesDetails() {
  const { id } = useParams();
  const [serieDetails, setSerieDetails] = useState({});
  const { SeriesDetailsBackground } = styles;

  useEffect(() => {
    const getSerieDetails = async () => {
      const details = await seriesAPI.getDetails(id);
      setSerieDetails(details);
    };

    getSerieDetails();
  }, []);

  console.log(serieDetails);

  return (
    <SeriesDetailsBackground>Series Details!</SeriesDetailsBackground>
  );
}

export default SeriesDetails;
