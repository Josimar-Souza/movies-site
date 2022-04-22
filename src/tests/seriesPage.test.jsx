/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import seriesMockData from './mocks/data/seriesMockData';
import SeriesPage from '../pages/SeriesPage';
import { seriesAPI } from '../redux/actions/series/actions';

describe('Testes da página de séries', () => {
  beforeEach(() => {
    jest.spyOn(seriesAPI, 'getAiringToday').mockResolvedValue(seriesMockData.airingToday);
    jest.spyOn(seriesAPI, 'getOnTheAir').mockResolvedValue(seriesMockData.onTheAir);
    jest.spyOn(seriesAPI, 'getPopular').mockResolvedValue(seriesMockData.popular);
    jest.spyOn(seriesAPI, 'getTopRated').mockResolvedValue(seriesMockData.topRated);
    renderWithRouterAndRedux(<SeriesPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Verifica a existência dos elementos hero', () => {
    it('O título da série', async () => {
      const seriesTitle = await screen.findByTestId('hero-serie-name');
      expect(seriesTitle).toBeDefined();
    });

    it('O ano de lançamento da série', async () => {
      const serieYear = await screen.findByTestId('hero-serie-year');
      expect(serieYear).toBeDefined();
    });

    it('A nota da série', async () => {
      const serieNote = await screen.findByTestId('hero-serie-note');
      expect(serieNote).toBeDefined();
    });

    it('Um botão escrito "Ver detalhes"', async () => {
      const detailsButton = await screen.findByRole('button', { name: 'Ver detalhes' });
      expect(detailsButton).toBeDefined();
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

  describe('Verifica a existência dos elementos da seção "Séries com episódios hoje"', () => {
    it('Um título escrito "Séries com episódios hoje"', async () => {
      const sectionTitle = await screen.findByRole('heading', { name: 'Séries com episódios hoje' });
      expect(sectionTitle).toBeDefined();
    });

    it('Todos os cards das séries dessa seção', async () => {
      const sectionSeries = await screen.findAllByTestId('item-Séries com episódios hoje');
      expect(sectionSeries.length).toBe(seriesMockData.airingToday.length);
    });
  });

  describe('Verifica a existência dos elementos da seção "Séries com episódios essa semana"', () => {
    it('Um título escrito "Séries com episódios essa semana"', async () => {
      const sectionTitle = await screen.findByRole('heading', { name: 'Séries com episódios essa semana' });
      expect(sectionTitle).toBeDefined();
    });

    it('Todos os cards das séries dessa seção', async () => {
      const sectionSeries = await screen.findAllByTestId('item-Séries com episódios essa semana');
      expect(sectionSeries.length).toBe(seriesMockData.onTheAir.length);
    });
  });

  describe('Verifica a existência dos elementos da seção "Séries populares"', () => {
    it('Um título escrito "Séries populares"', async () => {
      const sectionTitle = await screen.findByRole('heading', { name: 'Séries populares' });
      expect(sectionTitle).toBeDefined();
    });

    it('Todos os cards das séries dessa seção', async () => {
      const sectionSeries = await screen.findAllByTestId('item-Séries populares');
      expect(sectionSeries.length).toBe(seriesMockData.popular.length);
    });
  });

  describe('Verifica a existência dos elementos da seção "Séries mais votadas"', () => {
    it('Um título escrito "Séries mais votadas"', async () => {
      const sectionTitle = await screen.findByRole('heading', { name: 'Séries mais votadas' });
      expect(sectionTitle).toBeDefined();
    });

    it('Todos os cards das séries dessa seção', async () => {
      const sectionSeries = await screen.findAllByTestId('item-Séries mais votadas');
      expect(sectionSeries.length).toBe(seriesMockData.topRated.length);
    });
  });

  describe('Verifica o comportamento da página', () => {
    it('Ao clicar no botão "Filmes", é redirecionado para a página de filmes', async () => {
      const moviesButton = await screen.findByRole('button', { name: 'Filmes' });
      userEvent.click(moviesButton);
      const { location: { pathname } } = window;
      expect(pathname).toBe('/movies');
    });

    it('Ao clicar no botão "Ver detalhes", é redirecionado para a página de detalhes da série', async () => {
      const detailsButton = await screen.findByRole('button', { name: 'Ver detalhes' });
      userEvent.click(detailsButton);
      const { location: { pathname } } = window;
      expect(pathname).toMatch(/^\/series\/details\/[0-9]+$/);
    });

    it('Ao clicar em uma série, é redirecionado para a página de detalhes da série', async () => {
      const series = await screen.findAllByTestId('item-Séries com episódios hoje');
      userEvent.click(series[0]);
      const { location: { pathname } } = window;
      expect(pathname).toMatch(/^\/series\/details\/[0-9]+$/);
    });
  });
});
