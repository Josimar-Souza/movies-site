/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import MoviesPage from '../pages/MoviesPage';
import moviesMockData from './mocks/data/moviesMockData';
import { moviesAPI } from '../redux/actions/movies/actions';

describe('Testes da página de filmes', () => {
  beforeEach(() => {
    jest.spyOn(moviesAPI, 'getNowPlaying').mockResolvedValue(moviesMockData.nowPlaying);
    renderWithRouterAndRedux(<MoviesPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Verifica a existência dos elementos do hero', () => {
    it('O título do filme', async () => {
      const heroTitle = await screen.findByTestId('hero-movie-title');
      expect(heroTitle).toBeDefined();
    });

    it('O ano de lançamento do filme', async () => {
      const heroYear = await screen.findByTestId('hero-movie-year');
      expect(heroYear).toBeDefined();
    });

    it('A nota do filme', async () => {
      const heroNote = await screen.findByTestId('hero-movie-note');
      expect(heroNote).toBeDefined();
    });

    it('Um botão escrito "Ver detalhes"', async () => {
      const heroDetailsButton = await screen.findByRole('button', { name: 'Ver detalhes' });
      expect(heroDetailsButton).toBeDefined();
    });
  });

  describe('Verifica a existência dos elementos do header', () => {
    it('Um botão escrito "Filmes"', async () => {
      const moviesButton = await screen.findByRole('button', { name: 'Filmes' });
      expect(moviesButton).toBeDefined();
    });

    it('Um botão escrito "Séries"', async () => {
      const seriesButton = await screen.findByRole('button', { name: 'Séries' });
      expect(seriesButton).toBeDefined();
    });
  });

  describe('Verifica a existência dos elementos da seção "Filmes no cinema"', () => {
    it('Um título escrito "Filmes no cinema"', async () => {
      const sectionTitle = await screen.findByRole('heading', { name: 'Filmes no cinema' });
      expect(sectionTitle).toBeDefined();
    });

    it('Todos os cards dos filmes', async () => {
      const sectionMovies = await screen.findAllByTestId('item-Filmes no cinema');
      expect(sectionMovies.length).toBe(moviesMockData.nowPlaying.length);
    });
  });
});