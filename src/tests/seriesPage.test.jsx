/* eslint-disable no-undef */
import React from 'react';
// import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import SeriesPage from '../pages/SeriesPage';
import { seriesAPI } from '../redux/actions/series/actions';

describe('Testes da página de séries', () => {
  beforeEach(() => {
    jest.spyOn(seriesAPI, 'getAiringToday').mockResolvedValue([]);
    renderWithRouterAndRedux(<SeriesPage />);
  });
});
