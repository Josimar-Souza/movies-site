/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import seriesMockData from './mocks/data/seriesMockData';
import SeriesPage from '../pages/SeriesPage';
import { seriesAPI } from '../redux/actions/series/actions';

describe('Testes da página de séries', () => {
  beforeEach(() => {
    jest.spyOn(seriesAPI, 'getAiringToday').mockResolvedValue(seriesMockData.airingToday);
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
});
