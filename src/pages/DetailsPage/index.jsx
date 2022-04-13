import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage';
import MoviesAPI from '../../api/moviesAPI';
import getImageURL from '../../utils/getImageURL';
import getTrailer from '../../utils/getTrailer';
import Trailer from '../../components/Trailer';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const moviesAPI = new MoviesAPI(baseURL);

function DetailsPage({ type }) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);

  const {
    DetailsBackgorund,
    DetailsContainer,
    DetailsImageTrailerContainer,
    DetailsImage,
  } = styles;

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await moviesAPI.getDetails(id);
      const videos = await moviesAPI.getVideos(id);
      setMovieDetails(details);
      setMovieVideos(videos);
    };

    if (type === 'movie') {
      getMovieDetails();
    }
  }, []);

  const getYoutubeTrailer = () => {
    let trailer = {};
    if (type === 'movie') {
      if (movieVideos.length > 0) {
        trailer = getTrailer(movieVideos);
      }
    }

    if (trailer) {
      return trailer.key;
    }

    return '';
  };

  console.log(movieDetails);

  if (type === 'movie' && Object.keys(movieDetails).length > 0) {
    return (
      <section>
        <DetailsBackgorund image={movieDetails.backdrop_path} />
        <DetailsContainer>
          <DetailsImageTrailerContainer>
            <DetailsImage src={getImageURL(movieDetails.poster_path)} />
            <h3>Trailer</h3>
            <Trailer trailerKey={getYoutubeTrailer()} />
          </DetailsImageTrailerContainer>
        </DetailsContainer>
      </section>
    );
  }

  return (
    <h1>Loading...</h1>
  );
}

DetailsPage.defaultProps = {
  type: 'movie',
};

DetailsPage.propTypes = {
  type: PropTypes.string,
};

export default DetailsPage;
