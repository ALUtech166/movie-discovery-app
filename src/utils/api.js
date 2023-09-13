const API_KEY = 'afcc4e756d500720208345094fe13a77';
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
