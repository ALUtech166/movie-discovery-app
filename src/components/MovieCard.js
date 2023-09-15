import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="no-underline">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
      className="w-full h-64 object-cover relative"
      data-testid="movie-poster"
    />
    <div className="p-4">
      <p className="text-gray-600" data-testid="movie-release-date">
      {movie.release_year}
      </p>
      <h2 className="text-md font-semibold" data-testid="movie-title">
        {movie.title}
      </h2>

      <h2 className="text-xl font-semibold" data-testid="movie-category">
        {movie.type}
      </h2>

      <div className="flex gap-8 pt-4 items-center text-sm">
        <div className="flex gap-4">
          <img
            className="w-5 h-5"
            src="/imdb.png"
            alt="Heart Icon"
          />
          <p className="text-black">{movie.vote_average}/10</p>
        </div>

        <div className="flex gap-4">
        <img className="w-5" src="/tomato.png" alt="Tomato Icon" />

          <p className="text-black">97 %</p>
        </div>
      </div>
    </div>
  </div>
  </Link>
  );
};

export default MovieCard;
