import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MoviesDetailsStyles';
import MoviesAPI from '../../api/moviesAPI';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const moviesAPI = new MoviesAPI(baseURL);

function MoviesDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const {
    DetailsBackgorund,
    MovieDetailsContainer,
  } = styles;

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await moviesAPI.getDetails(id);
      setMovieDetails(details);
    };

    getMovieDetails();
  }, []);

  console.log(movieDetails);

  return (
    <section>
      <DetailsBackgorund image={movieDetails.backdrop_path} />
      <MovieDetailsContainer>
        MovieDetail
      </MovieDetailsContainer>
    </section>
  );
}

export default MoviesDetails;
