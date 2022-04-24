/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import DetailsPage, { moviesAPI } from '../pages/DetailsPage';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import movieDetailsMock from './mocks/data/movieDetailsMock';
import videosMockData from './mocks/data/videoMockData';

const baseImageURL = process.env.REACT_APP_IMAGE_BASE_URL;

describe('Testes da página de detalhes para filmes', () => {
  beforeEach(() => {
    jest.spyOn(moviesAPI, 'getDetails').mockResolvedValue(movieDetailsMock);
    jest.spyOn(moviesAPI, 'getVideos').mockResolvedValue(videosMockData);
    renderWithRouterAndRedux(<DetailsPage type="movies" />);
  });

  describe('Verifica a existência dos elementos na página', () => {
    it('O título do filme', async () => {
      const movieTitle = await screen.findByTestId('movie-details-title');
      expect(movieTitle).toBeDefined();
      expect(movieTitle.innerHTML).toBe(movieDetailsMock.title);
    });

    it('A imagem do filme', async () => {
      const movieImage = await screen.findByTestId('movie-details-image');
      expect(movieImage).toBeDefined();
      expect(movieImage).toHaveProperty('src', `${baseImageURL}${movieDetailsMock.poster_path}`);
    });

    it('O orçamento do filme', async () => {
      const movieBudget = await screen.findByTestId('movie-details-budget');
      expect(movieBudget).toBeDefined();
      expect(movieBudget.innerHTML).toBe('Orçamento: $185,000,000.00');
    });

    it('A receita do filme', async () => {
      const movieRevenue = await screen.findByTestId('movie-details-revenue');
      expect(movieRevenue).toBeDefined();
      expect(movieRevenue.innerHTML).toBe('Receita: $781,200,000.00');
    });

    it('O tempo do filme', async () => {
      const movieRuntime = await screen.findByTestId('movie-details-runtime');
      expect(movieRuntime).toBeDefined();
      expect(movieRuntime.innerHTML).toBe('167m');
    });

    it('A nota do filme', async () => {
      const movieNote = await screen.findByTestId('movie-details-note');
      expect(movieNote).toBeDefined();
      expect(movieNote.innerHTML).toBe('Nota: 8.1');
    });

    it('A data de lançamento do filme', async () => {
      const movieReleaseDate = await screen.findByTestId('movie-details-release-date');
      expect(movieReleaseDate).toBeDefined();
      expect(movieReleaseDate.innerHTML).toBe('23/05/2019');
    });

    it('O status do filme', async () => {
      const movieStatus = await screen.findByTestId('movie-details-status');
      expect(movieStatus).toBeDefined();
      expect(movieStatus.innerHTML).toBe(`Status: ${movieDetailsMock.status}`);
    });

    it('Os gêneros do filme', async () => {
      const movieGenres = await screen.findAllByTestId('movie-details-genre');
      movieGenres.forEach((genre, index) => {
        expect(genre.innerHTML).toBe(movieDetailsMock.genres[index].name);
      });
    });

    it('Uma descrição do filme', async () => {
      const movieOverview = await screen.findByTestId('movie-details-overview');
      expect(movieOverview).toBeDefined();
      expect(movieOverview.innerHTML).toBe(movieDetailsMock.overview);
    });

    it('Um título escrito "Empresas de produção"', async () => {
      const sectionTitle = await screen.findByRole('heading', { name: 'Empresas de produção' });
      expect(sectionTitle).toBeDefined();
    });

    it('Todas as empresas de produção', async () => {
      const companyImage = await screen.findAllByTestId('company-card-image');
      const companyTitle = await screen.findAllByTestId('company-card-title');

      movieDetailsMock.production_companies.forEach((company, index) => {
        expect(companyImage[index]).toHaveProperty('src', `${baseImageURL}${company.logo_path}`);
        expect(companyTitle[index].innerHTML).toBe(company.name);
      });
    });

    it('Um título escrito "Trailer"', async () => {
      const trailerTitle = await screen.findByRole('heading', { name: 'Trailer' });
      expect(trailerTitle).toBeDefined();
    });

    it('O trailer do filme', async () => {
      const movieTrailer = await screen.findByTestId('movie-details-trailer');
      expect(movieTrailer).toBeDefined();
      expect(movieTrailer).toHaveProperty('src', `https://www.youtube.com/embed/${videosMockData[0].key}`);
    });
  });
});
