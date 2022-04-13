import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage';
import MoviesAPI from '../../api/moviesAPI';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const moviesAPI = new MoviesAPI(baseURL);

function DetailsPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const {
    DetailsBackgorund,
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
    <DetailsBackgorund image={movieDetails.backdrop_path} />
  );
}

export default DetailsPage;
