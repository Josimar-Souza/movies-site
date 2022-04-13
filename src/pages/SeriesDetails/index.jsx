import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SeriesDetailsStyles';
import SeriesAPI from '../../api/seriesAPI';
import getImageURL from '../../utils/getImageURL';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const seriesAPI = new SeriesAPI(baseURL);

function SeriesDetails() {
  const { id } = useParams();
  const [serieDetails, setSerieDetails] = useState({});
  const [serieVideos, setSerieVideos] = useState([]);

  const {
    SeriesDetailsBackground,
    SeriesDetailsContainer,
    SeriesDetailsImageTrailerContainer,
    SeriesDetailsImage,
  } = styles;

  useEffect(() => {
    const getSerieDetails = async () => {
      const details = await seriesAPI.getDetails(id);
      const videos = await seriesAPI.getVideos(id);
      setSerieDetails(details);
      setSerieVideos(videos);
    };

    getSerieDetails();
  }, []);

  console.log(serieDetails);

  return (
    <SeriesDetailsBackground image={serieDetails.backdrop_path}>
      <SeriesDetailsContainer>
        <SeriesDetailsImageTrailerContainer>
          <SeriesDetailsImage src={getImageURL(serieDetails.poster_path)} />
        </SeriesDetailsImageTrailerContainer>
      </SeriesDetailsContainer>
    </SeriesDetailsBackground>
  );
}

export default SeriesDetails;
