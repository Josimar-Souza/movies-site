/* eslint-disable no-undef */
import React from 'react';
// import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import MoviesPage from '../pages/MoviesPage';

describe('Testes da página de filmes', () => {
  describe('Verifica a existencia dos elementos na página', () => {
    beforeEach(() => {
      renderWithRouterAndRedux(<MoviesPage />);
    });
  });
});
