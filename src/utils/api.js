const API_KEY = '16c30bf3150af5a1bc70b114cf54db18';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = {
  fetchTopMovies: async () => {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  },

  fetchMovieDetails: async (id) => {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  },

  searchMovies: async (query) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    return data;
  },
};

export default api;
