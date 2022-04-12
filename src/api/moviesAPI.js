import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseQueryString = `?api_key=${apiKey}&language=pt-BR`;

class MoviesAPI {
  constructor(baseURL) {
    this.http = axios.create({
      baseURL,
      timeout: 10000,
    });
  }

  async getNowPlaying() {
    const { data: { results } } = await this.http.get(`/movie/now_playing${baseQueryString}`);
    return results;
  }

  async getPopular() {
    const { data: { results } } = await this.http.get(`/movie/popular${baseQueryString}`);
    return results;
  }

  async getTopRated() {
    const { data: { results } } = await this.http.get(`/movie/top_rated${baseQueryString}`);
    return results;
  }

  async getUpcoming() {
    const { data: { results } } = await this.http.get(`/movie/upcoming${baseQueryString}`);
    return results;
  }

  async getDetails(id) {
    const { data } = await this.http.get(`/movie/${id}${baseQueryString}`);
    return data;
  }

  async getVideos(id) {
    const { data: { results } } = await this.http.get(`/movie/${id}/videos${baseQueryString}`);
    return results;
  }
}

export default MoviesAPI;
