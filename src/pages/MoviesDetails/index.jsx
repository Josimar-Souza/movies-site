import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MoviesDetailsStyles';
import MoviesAPI from '../../api/moviesAPI';
import getImageURL from '../../utils/getImageURL';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const moviesAPI = new MoviesAPI(baseURL);

function MoviesDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const {
    DetailsBackgorund,
    MovieDetailsContainer,
    MovieDetailsImageContainer,
    MovieDetailsImage,
    MovieInfoContainer,
    MovieTitle,
    MovieOverview,
    GenresContainer,
    MovieGenre,
    MovieTecnicalInfo,
    MovieNote,
  } = styles;

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await moviesAPI.getDetails(id);
      setMovieDetails(details);
    };

    getMovieDetails();
  }, []);

  console.log(movieDetails);

  const currencyFormatter = (number) => {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(number);
  };

  const dateFormatter = (date) => {
    const dateSplited = date.split('-');
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  };

  if (Object.keys(movieDetails).length > 0) {
    return (
      <section>
        <DetailsBackgorund image={movieDetails.backdrop_path} />
        <MovieDetailsContainer>
          <MovieDetailsImageContainer>
            <MovieDetailsImage src={getImageURL(movieDetails.poster_path)} />
          </MovieDetailsImageContainer>
          <MovieInfoContainer>
            <MovieTitle>{movieDetails.title}</MovieTitle>
            <MovieTecnicalInfo>
              <p>{`Orçamento: ${currencyFormatter(movieDetails.budget)}`}</p>
              <p>{`Receita: ${currencyFormatter(movieDetails.revenue)}`}</p>
            </MovieTecnicalInfo>
            <MovieTecnicalInfo>
              <p>{`${movieDetails.runtime}m`}</p>
              <MovieNote>{`Nota: ${movieDetails.vote_average}`}</MovieNote>
            </MovieTecnicalInfo>
            <MovieTecnicalInfo>
              <p>{dateFormatter(movieDetails.release_date)}</p>
              <p>{`Status: ${movieDetails.status}`}</p>
            </MovieTecnicalInfo>
            <GenresContainer>
              {
                movieDetails.genres.map(
                  (genre) => <MovieGenre key={genre.id}>{genre.name}</MovieGenre>,
                )
              }
            </GenresContainer>
            <MovieOverview>{movieDetails.overview}</MovieOverview>
          </MovieInfoContainer>
        </MovieDetailsContainer>
      </section>
    );
  }

  return (
    <h1>Loading...</h1>
  );
}

export default MoviesDetails;
