import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

async function getAllCasts(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=16c30bf3150af5a1bc70b114cf54db18&language=en-US`
  );
  return res.json();
}
const MovieDetails = async ({ history }) => {
  //const movieId = match.params.id;
  const [movieDetails, setMovieDetails] = useState(null);

  const {id} = useParams()
  console.log('id', id)

  const movieSingle = await getAllCasts(id);

  console.log("Movie", movieSingle)
  
  //useEffect(() => {
    // Fetch movie details using movieId
    // Update 'movieDetails' state
  //}, [//movieId]);

 /*  if (!movieDetails) {
    return <div>Loading...</div>;
  }
 */
  return (
    <div className="flex">
      {/* Sidebar Menu */}
      <div className="w-1/5 bg-gray-800 p-4 text-white">
        <div className="text-center mb-4">
          <img src="/logo.svg" alt="Logo" className="w-16 h-16 mx-auto" />
          <p>Company Name</p>
        </div>
        <ul className="space-y-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tv-series">TV Series</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <button onClick={() => history.push('/logout')} className="text-left">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Movie Details */}
      <div className="flex-1 p-4">
        <div className="text-center">
          {/* <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full h-64 object-cover relative"
          /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-4">
              {/* White Play Button SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* SVG Path for Play Button */}
                <path
                  fillRule="evenodd"
                  d="M7.293 4.293a1 1 0 011.414 0L15 10.586a1 1 0 010 1.414l-6.293 6.293a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6zM8 9a1 1 0 011-1v4a1 1 0 01-1-1V9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
       {/*  <div className="text-center mt-4">
          <h2 className="text-3xl font-semibold">{movieDetails.title}</h2>
          <p className="text-gray-600">Release Year: {new Date(movieDetails.release_date).getFullYear()}</p>
          <p className="text-gray-600">Type: {movieDetails.type}</p>
          <p className="text-gray-600">Country: {movieDetails.country}</p>
          <p>{movieDetails.description}</p>
          <p className="text-gray-600">Directors: {movieDetails.directors.join(', ')}</p>
          <p className="text-gray-600">Stars: {movieDetails.stars.join(', ')}</p>
          <p className="text-gray-600">Writers: {movieDetails.writers.join(', ')}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
            Top Rated Movie #65
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MovieDetails;
