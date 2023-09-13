import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../src/utils/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details by ID
    api.fetchMovieDetails(id)
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
      <p data-testid="movie-overview">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
