import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage';
import MoviesAPI from '../../api/moviesAPI';
import SeriesAPI from '../../api/seriesAPI';
import getImageURL from '../../utils/getImageURL';
import getTrailer from '../../utils/getTrailer';
import Trailer from '../../components/Trailer';
import ProductionCompaniesCard from '../../components/ProductionCompaniesCard';
import Loading from '../../components/Loading';

const baseURL = process.env.REACT_APP_API_BASE_URL;
export const moviesAPI = new MoviesAPI(baseURL);
export const seriesAPI = new SeriesAPI(baseURL);

function DetailsPage({ type }) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const [serieDetails, setSerieDetails] = useState({});
  const [serieVideos, setSerieVideos] = useState([]);

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

    const getSerieDetails = async () => {
      const details = await seriesAPI.getDetails(id);
      const videos = await seriesAPI.getVideos(id);
      setSerieDetails(details);
      setSerieVideos(videos);
    };

    if (type === 'movies') {
      getMovieDetails();
    } else {
      getSerieDetails();
    }
  }, []);

  const getYoutubeTrailer = () => {
    let trailer = {};
    if (type === 'movies') {
      if (movieVideos.length > 0) {
        trailer = getTrailer(movieVideos);
      }
    } else if (type === 'series') {
      if (serieVideos.length > 0) {
        trailer = getTrailer(serieVideos);
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

  if (type === 'movies' && Object.keys(movieDetails).length > 0) {
    return (
      <section>
        <DetailsBackgorund image={movieDetails.backdrop_path} />
        <DetailsContainer>
          <DetailsImageTrailerContainer>
            <DetailsImage data-testid="movie-details-image" src={getImageURL(movieDetails.poster_path)} alt={`Imagem de ${movieDetails.title}`} />
            <h3>Trailer</h3>
            <Trailer testId="movie-details-trailer" trailerKey={getYoutubeTrailer()} />
          </DetailsImageTrailerContainer>
          <InfoContainer>
            <Title data-testid="movie-details-title">{movieDetails.title}</Title>
            <TecnicalInfo>
              <p data-testid="movie-details-budget">{`Orçamento: ${currencyFormatter(movieDetails.budget)}`}</p>
              <p data-testid="movie-details-revenue">{`Receita: ${currencyFormatter(movieDetails.revenue)}`}</p>
            </TecnicalInfo>
            <TecnicalInfo>
              <p data-testid="movie-details-runtime">{`${movieDetails.runtime}m`}</p>
              <Note data-testid="movie-details-note">{`Nota: ${movieDetails.vote_average}`}</Note>
            </TecnicalInfo>
            <TecnicalInfo>
              <p data-testid="movie-details-release-date">{dateFormatter(movieDetails.release_date)}</p>
              <p data-testid="movie-details-status">{`Status: ${movieDetails.status}`}</p>
            </TecnicalInfo>
            <GenresContainer>
              {
                movieDetails.genres.map(
                  (genre) => <Genre data-testid="movie-details-genre" key={genre.id}>{genre.name}</Genre>,
                )
              }
            </GenresContainer>
            <Overview data-testid="movie-details-overview">{movieDetails.overview}</Overview>
            <ProductionCompaniesContainer>
              <h2>Empresas de produção</h2>
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

  if (type === 'series' && Object.keys(serieDetails).length > 0) {
    return (
      <section>
        <DetailsBackgorund image={serieDetails.backdrop_path} />
        <DetailsContainer>
          <DetailsImageTrailerContainer>
            <DetailsImage src={getImageURL(serieDetails.poster_path)} alt={`Imagem de ${serieDetails.name}`} />
            <h3>Trailer</h3>
            <Trailer trailerKey={getYoutubeTrailer()} />
          </DetailsImageTrailerContainer>
          <InfoContainer>
            <Title data-testid="serie-details-name">{serieDetails.name}</Title>
            <TecnicalInfo>
              <p data-testid="serie-details-release-date">{`${dateFormatter(serieDetails.first_air_date)}`}</p>
              <p data-testid="serie-details-status">{`Status: ${serieDetails.status}`}</p>
            </TecnicalInfo>
            <TecnicalInfo>
              <p data-testid="serie-details-seasons">{`Temporadas: ${serieDetails.number_of_seasons}`}</p>
              <p data-testid="serie-details-episodes">{`Episódios: ${serieDetails.number_of_episodes}`}</p>
              <Note data-testid="serie-details-note">{`Nota: ${serieDetails.vote_average}`}</Note>
            </TecnicalInfo>
            <GenresContainer>
              {
                serieDetails.genres.map(
                  (genre) => <Genre data-testid="serie-details-genre" key={genre.id}>{genre.name}</Genre>,
                )
              }
            </GenresContainer>
            <Overview data-testid="serie-details-overview">{serieDetails.overview}</Overview>
            <ProductionCompaniesContainer>
              <h2>Empresas de produção</h2>
              {
                serieDetails.production_companies.map(
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
    <Loading />
  );
}

DetailsPage.defaultProps = {
  type: 'movies',
};

DetailsPage.propTypes = {
  type: PropTypes.string,
};

export default DetailsPage;
