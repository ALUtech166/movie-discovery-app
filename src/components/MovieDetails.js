import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import api from '../utils/api';

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameter
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the ID
    api.fetchMovieDetails(id)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);


  if (!movieDetails) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  return (
    <div className="flex gap-4 lg:m-24">
      {/* Sidebar Menu */}
      <div className="w-1/5 bg-white p-6 text-black">
        <div className="text-center mb-4">
          <img src="/Logo1.png" alt="Logo" className="w-36  mx-auto" />
         
        </div>
        <ul className="pt-12">
          <li className='flex gap-2 items-center'>
            <img className='w-7' src='/Home.png'/>
            <Link to="/">Home</Link>
          </li>
          <li className="mt-8 flex gap-2 items-center">
            <img className='w-7' src='/Movie.png'/>
            <Link to="/movies">Movies</Link>
          </li>
          <li className="mt-8 flex gap-2 items-center">
          <img className='w-7' src='/TVShow.png'/>
            <Link to="/tv-series">TV Series</Link>
          </li>
          <li className="mt-8 flex gap-2 items-center">
          <img className='w-7' src='/Calendar.png'/>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li className="mt-36 flex gap-2 items-center">
            <button className="text-left">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Movie Details */}
      <div className="flex-1 p-4">
        <div className="relative text-center">
          { <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full h-72 object-cover rounded-lg"
          />}
          <div className="absolute inset-0 flex items-center justify-center">
            <img className='w-20' src='/Frame.png'/>
          </div>
        </div>
       <div className="text-center mt-4 flex gap-2">
          <h2 className="text-md">{movieDetails.title}</h2>
          <p className="text-gray-600">{new Date(movieDetails.release_date).getFullYear()}</p>
          <p className="text-gray-600">Type: {movieDetails.action}</p>
          <p className="text-gray-600">Country: {movieDetails.country}</p>
          
        </div> 
        <p>{movieDetails.description}</p>
          <p className="text-gray-600">Director: {movieDetails.directors}</p>
          <p className="text-gray-600">Writers: {movieDetails.writers}</p>
          <p className="text-gray-600">Stars: {movieDetails.stars}</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4">
            Top Rated Movie #65
          </button>
      </div>
    </div>
  )
}

export default MovieDetails