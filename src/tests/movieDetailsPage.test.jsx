/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import DetailsPage, { moviesAPI } from '../pages/DetailsPage';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import movieDetailsMock from './mocks/data/movieDetailsMock';
import videosMockData from './mocks/data/videoMockData';

describe('Testes da página de detalhes para filmes', () => {
  beforeEach(() => {
    const { movieVideoMock } = videosMockData;
    jest.spyOn(moviesAPI, 'getDetails').mockResolvedValue(movieDetailsMock);
    jest.spyOn(moviesAPI, 'getVideos').mockResolvedValue(movieVideoMock);
    renderWithRouterAndRedux(<DetailsPage type="movies" />);
  });

  describe('Verifica a existência dos elementos na página', () => {
    it('O título do filme', async () => {
      const movieTitle = await screen.findByTestId('movie-details-title');
      expect(movieTitle).toBeDefined();
      expect(movieTitle.innerHTML).toBe(movieDetailsMock.title);
    });
  });
});
