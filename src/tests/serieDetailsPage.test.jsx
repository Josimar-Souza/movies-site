/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import DetailsPage, { seriesAPI } from '../pages/DetailsPage';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import serieDetailsMockData from './mocks/data/serieDetailsMock';
import videosMockData from './mocks/data/videoMockData';

describe('Testes da página de detalhes de séries', () => {
  beforeEach(() => {
    jest.spyOn(seriesAPI, 'getDetails').mockResolvedValue(serieDetailsMockData);
    jest.spyOn(seriesAPI, 'getVideos').mockResolvedValue(videosMockData);
    renderWithRouterAndRedux(<DetailsPage type="series" />);
  });

  it('O título da série', async () => {
    const serieName = await screen.findByTestId('serie-details-name');
    expect(serieName).toBeDefined();
    expect(serieName.innerHTML).toBe(serieDetailsMockData.name);
  });
});
