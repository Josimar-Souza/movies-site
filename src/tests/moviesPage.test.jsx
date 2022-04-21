/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import MoviesPage from '../pages/MoviesPage';
import moviesMockData from './mocks/data/moviesMockData';
import { moviesAPI } from '../redux/actions/movies/actions';

describe('Testes da página de filmes', () => {
  describe('Verifica a existencia dos elementos do hero', () => {
    beforeEach(() => {
      jest.spyOn(moviesAPI, 'getNowPlaying').mockResolvedValue(moviesMockData.nowPlaying);
      renderWithRouterAndRedux(<MoviesPage />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('O titulo do filme', async () => {
      const heroTitle = await screen.findByTestId('hero-movie-title');
      expect(heroTitle).toBeDefined();
    });

    it('O ano de lançamento do filme', async () => {
      const heroYear = await screen.findByTestId('hero-movie-year');
      expect(heroYear).toBeDefined();
    });
  });
});
