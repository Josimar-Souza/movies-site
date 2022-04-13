import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage';
import MoviesAPI from '../../api/moviesAPI';
import getImageURL from '../../utils/getImageURL';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const moviesAPI = new MoviesAPI(baseURL);

function DetailsPage({ type }) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const {
    DetailsBackgorund,
    DetailsContainer,
    DetailsImageTrailerContainer,
    DetailsImage,
  } = styles;

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await moviesAPI.getDetails(id);
      setMovieDetails(details);
    };

    if (type === 'movie') {
      getMovieDetails();
    }
  }, []);

  console.log(movieDetails);

  if (type === 'movie' && Object.keys(movieDetails).length > 0) {
    return (
      <section>
        <DetailsBackgorund image={movieDetails.backdrop_path} />
        <DetailsContainer>
          <DetailsImageTrailerContainer>
            <DetailsImage src={getImageURL(movieDetails.poster_path)} />
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
