import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SeriesDetailsStyles';
import SeriesAPI from '../../api/seriesAPI';
import getImageURL from '../../utils/getImageURL';
import getTrailer from '../../utils/getTrailer';
import Trailer from '../../components/Trailer';

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
    SerieInfoContainer,
    SerieTitle,
    SerieTecnicalInfo,
    SerieNote,
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

  const getSerieTrailer = () => {
    let trailer = {};
    if (serieVideos.length > 0) {
      trailer = getTrailer(serieVideos);
    }

    if (trailer) {
      return trailer.key;
    }

    return '';
  };

  const dateFormatter = (date) => {
    const dateSplited = date.split('-');
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  };

  if (Object.keys(serieDetails).length > 0) {
    return (
      <section>
        <SeriesDetailsBackground image={serieDetails.backdrop_path} />
        <SeriesDetailsContainer>
          <SeriesDetailsImageTrailerContainer>
            <SeriesDetailsImage src={getImageURL(serieDetails.poster_path)} />
            <h3>Trailer</h3>
            <Trailer trailerKey={getSerieTrailer()} />
          </SeriesDetailsImageTrailerContainer>
          <SerieInfoContainer>
            <SerieTitle>{serieDetails.name}</SerieTitle>
            <SerieTecnicalInfo>
              <p>{`${dateFormatter(serieDetails.first_air_date)}`}</p>
              <p>{`Status: ${serieDetails.status}`}</p>
            </SerieTecnicalInfo>
            <SerieTecnicalInfo>
              <p>{`Temporadas: ${serieDetails.number_of_seasons}`}</p>
              <p>{`Episódios: ${serieDetails.number_of_episodes}`}</p>
              <SerieNote>{`Nota: ${serieDetails.vote_average}`}</SerieNote>
            </SerieTecnicalInfo>
          </SerieInfoContainer>
        </SeriesDetailsContainer>
      </section>
    );
  }

  return (
    <h1>Loading...</h1>
  );
}

export default SeriesDetails;
