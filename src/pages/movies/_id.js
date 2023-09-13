import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';

const MovieDetailPage = () => {
  return (
    <div>
      <h1>Movie Details</h1>
      <MovieDetails />
    </div>
  );
};

export default MovieDetailPage;
