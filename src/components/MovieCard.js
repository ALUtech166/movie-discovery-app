import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import MovieDetails from "../components/MovieDetails";
import api from "../utils/api";

const MovieCard = ({ movie }) => {
  const [genres, setGenres] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const { genres: movieGenres, production_countries: movieProductionCountries } = movie;


  useEffect(() => {
    // Fetch movie genres data based on the genre IDs
    const genreIds = movie.genre_ids || []; // Make sure movie.genre_ids is an array

    api.fetchGenres()
      .then((data) => {
        // Filter and map the genres
        const movieGenres = data.genres.filter((genre) => genreIds.includes(genre.id));
        setGenres(movieGenres);
      })
      .catch((error) => {
        console.error(error);
      });

      if (movieProductionCountries && movieProductionCountries.length > 0) {
        setProductionCountries(movieProductionCountries);
      }
  }, [movieGenres, movieProductionCountries]);

  return (
    <Link to={`/movie/${movie.id}`} component={MovieDetails} className="no-underline">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative text-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-72 object-cover rounded-lg"
          />
          <div className="absolute inset-0 top-2 left-60 right-2">
            <img className='w-10' src='/Favorite.png' alt="Favorite Icon" />
          </div>
        </div>

        <div className="p-4">

          <div className="flex text-sm">
          <p className="text-gray-600">
            USA,
            {productionCountries && productionCountries.map((country) => country.name).join(', ')}
          </p>
          <p className="text-gray-600" data-testid="movie-release-date">
            {new Date(movie.release_date).getFullYear()}
          </p>
          </div>
          <h2 className="text-md font-semibold" data-testid="movie-title">
            {movie.title}
          </h2>

          

          <div className="flex gap-8 pt-4 items-center text-sm">
            <div className="flex gap-4">
              <img
                className="w-5 h-5"
                src="/imdb.png"
                alt="IMDb Icon"
              />
              <p className="text-black">{movie.vote_average}/10</p>
            </div>

            <div className="flex gap-4">
              <img className="w-5" src="/tomato.png" alt="Tomato Icon" />
              <p className="text-black">97 %</p>
            </div>
          </div>
          <h2 className="text-sm font-medium text-gray-600 pt-2">
            {genres && genres.map((genre) => genre.name).join(', ')}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
