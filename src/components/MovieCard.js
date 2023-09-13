import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
        data-testid="movie-poster"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold" data-testid="movie-title">
          {movie.title}
        </h2>
        <p className="text-gray-600" data-testid="movie-release-date">
          Release Date: {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
