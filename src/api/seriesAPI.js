import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseQueryString = `?api_key=${apiKey}&language=pt-BR`;

class SeriesAPI {
  constructor(baseURL) {
    this.http = axios.create({
      baseURL,
      timeout: 10000,
    });
  }

  async getAiringToday() {
    const { data: { results } } = await this.http.get(`/tv/airing_today${baseQueryString}`);
    return results;
  }

  async getOnTheAir() {
    const { data: { results } } = await this.http.get(`/tv/on_the_air${baseQueryString}`);
    return results;
  }

  async getPopular() {
    const { data: { results } } = await this.http.get(`/tv/popular${baseQueryString}`);
    return results;
  }

  async getTopRated() {
    const { data: { results } } = await this.http.get(`/tv/top_rated${baseQueryString}`);
    return results;
  }

  async getDetails(id) {
    const { data } = await this.http.get(`/tv/${id}${baseQueryString}`);
    return data;
  }

  async getVideos(id) {
    const { data: { results } } = await this.http.get(`/tv/${id}/videos${baseQueryString}`);
    return results;
  }
}

export default SeriesAPI;
