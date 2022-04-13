import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage';
import MoviesAPI from '../../api/moviesAPI';
import getImageURL from '../../utils/getImageURL';
import getTrailer from '../../utils/getTrailer';
import Trailer from '../../components/Trailer';
import ProductionCompaniesCard from '../../components/ProductionCompaniesCard';

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
    InfoContainer,
    Title,
    TecnicalInfo,
    Note,
    GenresContainer,
    Genre,
    Overview,
    ProductionCompaniesContainer,
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
          <InfoContainer>
            <Title>{movieDetails.title}</Title>
            <TecnicalInfo>
              <p>{`Orçamento: ${currencyFormatter(movieDetails.budget)}`}</p>
              <p>{`Receita: ${currencyFormatter(movieDetails.revenue)}`}</p>
            </TecnicalInfo>
            <TecnicalInfo>
              <p>{`${movieDetails.runtime}m`}</p>
              <Note>{`Nota: ${movieDetails.vote_average}`}</Note>
            </TecnicalInfo>
            <TecnicalInfo>
              <p>{dateFormatter(movieDetails.release_date)}</p>
              <p>{`Status: ${movieDetails.status}`}</p>
            </TecnicalInfo>
            <GenresContainer>
              {
                movieDetails.genres.map(
                  (genre) => <Genre key={genre.id}>{genre.name}</Genre>,
                )
              }
            </GenresContainer>
            <Overview>{movieDetails.overview}</Overview>
            <ProductionCompaniesContainer>
              {
                movieDetails.production_companies.map(
                  (company) => <ProductionCompaniesCard key={company.id} company={company} />,
                )
              }
            </ProductionCompaniesContainer>
          </InfoContainer>
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
