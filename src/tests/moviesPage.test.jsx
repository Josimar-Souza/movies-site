/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import MoviesPage from '../pages/MoviesPage';
import moviesMockData from './mocks/data/moviesMockData';

describe('Testes da página de filmes', () => {
  describe('Verifica a existencia dos elementos do hero', () => {
    beforeEach(() => {
      renderWithRouterAndRedux(<MoviesPage />, moviesMockData);
    });

    it('O titulo do filme', async () => {
      const heroTitle = await screen.findByTestId('hero-movie-title');
      expect(heroTitle).toBeInTheDocument();
    });
  });
});
