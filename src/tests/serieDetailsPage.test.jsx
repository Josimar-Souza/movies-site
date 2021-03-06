/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import DetailsPage, { seriesAPI } from '../pages/DetailsPage';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import serieDetailsMockData from './mocks/data/serieDetailsMock';
import videosMockData from './mocks/data/videoMockData';

const baseImageURL = process.env.REACT_APP_IMAGE_BASE_URL;

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

  it('A data de lançamento da série', async () => {
    const serieReleaseDate = await screen.findByTestId('serie-details-release-date');
    expect(serieReleaseDate).toBeDefined();
    expect(serieReleaseDate.innerHTML).toBe('30/03/2016');
  });

  it('O status da série', async () => {
    const serieStatus = await screen.findByTestId('serie-details-status');
    expect(serieStatus).toBeDefined();
    expect(serieStatus.innerHTML).toBe(`Status: ${serieDetailsMockData.status}`);
  });

  it('O número de temporadas', async () => {
    const serieSeasons = await screen.findByTestId('serie-details-seasons');
    expect(serieSeasons).toBeDefined();
    expect(serieSeasons.innerHTML).toBe(`Temporadas: ${serieDetailsMockData.number_of_seasons}`);
  });

  it('O número de episódios', async () => {
    const serieEpisodes = await screen.findByTestId('serie-details-episodes');
    expect(serieEpisodes).toBeDefined();
    expect(serieEpisodes.innerHTML).toBe(`Episódios: ${serieDetailsMockData.number_of_episodes}`);
  });

  it('A nota da série', async () => {
    const serieNote = await screen.findByTestId('serie-details-note');
    expect(serieNote).toBeDefined();
    expect(serieNote.innerHTML).toBe(`Nota: ${serieDetailsMockData.vote_average}`);
  });

  it('Os gêneros da série', async () => {
    const serieGenres = await screen.findAllByTestId('serie-details-genre');
    serieGenres.forEach((genre, index) => {
      expect(genre).toBeDefined();
      expect(genre.innerHTML).toBe(serieDetailsMockData.genres[index].name);
    });
  });

  it('A descrição da série', async () => {
    const serieOverview = await screen.findByTestId('serie-details-overview');
    expect(serieOverview).toBeDefined();
    expect(serieOverview.innerHTML).toBe(serieDetailsMockData.overview);
  });

  it('A imagem da série', async () => {
    const serieImage = await screen.findByTestId('serie-details-image');
    expect(serieImage).toHaveProperty('src', `${baseImageURL}${serieDetailsMockData.poster_path}`);
  });

  it('Um título escrito "Empresas de produção"', async () => {
    const companiesSectionTitle = await screen.findByRole('heading', { name: 'Empresas de produção' });
    expect(companiesSectionTitle).toBeDefined();
  });

  it('Todas as empresas de produção', async () => {
    const serieCompaniesImages = await screen.findAllByTestId('company-card-image');
    const serieCompaniesNames = await screen.findAllByTestId('company-card-title');

    serieDetailsMockData.production_companies.forEach((company, index) => {
      expect(serieCompaniesImages[index]).toBeDefined();
      expect(serieCompaniesNames[index]).toBeDefined();

      expect(serieCompaniesImages[index]).toHaveProperty('src', `${baseImageURL}${company.logo_path}`);
      expect(serieCompaniesNames[index].innerHTML).toBe(company.name);
    });
  });

  it('Um título escrito "Trailer"', async () => {
    const trailerTitle = await screen.findByRole('heading', { name: 'Trailer' });
    expect(trailerTitle).toBeDefined();
  });

  it('O trailer da série', async () => {
    const serieTrailer = await screen.findByTestId('serie-details-trailer');
    expect(serieTrailer).toBeDefined();
    expect(serieTrailer).toHaveProperty('src', `https://www.youtube.com/embed/${videosMockData[0].key}`);
  });

  it('Esperado que não exista um header', () => {
    const moviesButton = screen.queryByRole('button', { name: 'Filmes' });
    const seriesButton = screen.queryByRole('button', { name: 'Séries' });

    expect(moviesButton).toBe(null);
    expect(seriesButton).toBe(null);
  });
});
