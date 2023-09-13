import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import api from './utils/api';
import App from './App';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Fetch top 10 movies
    api.fetchTopMovies()
      .then((data) => setTopMovies(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Top 10 Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
