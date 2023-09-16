import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../utils/api";

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameter
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the ID
    api
      .fetchMovieDetails(id)
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
      <div className="w-1/5 bg-white p-6 text-black border-r-2 border-b-2 border-t-2 rounded-r-[100px]">
        <div className="text-center mb-4">
          <img src="/Logo1.png" alt="Logo" className="w-36  mx-auto" />
        </div>
        <ul className="pt-12">
          <li className="flex gap-2 items-center">
            <img className="w-7" src="/Home.png" />
            <Link to="/">Home</Link>
          </li>
          <li className="mt-8 flex gap-2 items-center bg-red-200 text-red-600 p-4">
            <img className="w-7" src="/Movie.png" />
            <Link to="/movies">Movies</Link>
          </li>
          <li className="mt-8 flex gap-2 items-center">
            <img className="w-7" src="/TVShow.png" />
            <Link to="/tv-series">TV Series</Link>
          </li>
          <li className="mt-8 flex gap-2 items-center">
            <img className="w-7" src="/Calendar.png" />
            <Link to="/upcoming">Upcoming</Link>
          </li>

          <button className="bg-transparent text-sm text-black px-8 py-4 text-justify mt-8 rounded-[25px] border border-red-400">
            Play movie quizes and earn free tickets 50k people are playing now
            <button className="bg-red-200 text-white px-4 py-2 text-sm mt-4 rounded-full">
              Start Playing
            </button>

          </button>
          <li className="mt-36 flex gap-2 items-center">
          <img className="w-7" src="/Logout.png" />
         
            <button className="text-left">Logout</button>
          </li>
        </ul>
      </div>

      {/* Movie Details */}
      <div className="flex-1 p-4">
        <div className="relative text-center">
          {
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="w-full h-72 object-cover rounded-lg"
            />
          }
          <div className="absolute inset-0 flex items-center justify-center">
            <img className="w-20" src="/Frame.png" />
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <div className="w-3/4">
            <div className="text-center mt-4 flex gap-2 items-center">
              <h2 className="text-md">{movieDetails.title}</h2>
              <span className="text-2xl items-center">.</span>
              <p className="text-gray-600">
                {new Date(movieDetails.release_date).getFullYear()}
              </p>
              <span className="text-2xl items-center">.</span>
              <p className="text-gray-600">{movieDetails.media_type}</p>
              <p className="text-gray-600">{movieDetails.genre_ids}</p>
            </div>
            <p className="text-justify mb-4">{movieDetails.overview}</p>
            <p className="text-gray-600 mb-4">
              Director: {movieDetails.directors}
            </p>
            <p className="text-gray-600 mb-4">
              Writers: {movieDetails.writers}
            </p>
            <p className="text-gray-600 mb-4">Stars: {movieDetails.stars}</p>
            <div className="rounded-lg border-black mt-24 flex">
              <button className="bg-red-600 text-white px-4 py-2 text-sm rounded-lg">
                Top Rated Movie #65
              </button>
              <button className="bg-transparent text-sm flex gap-4 text-black px-8 py-2 rounded-lg border">
                <span>Awards 9 nominations</span>
                <img className="w-5" src="/Expand.png" />

              </button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col">
            <p className="flex gap-2 mt-4 flex-row justify-end text-right mx-24">
            <img className="w-5" src="/Star.png" />
            <span className="text-gray-300 text-sm">8.5</span>
            <span className="text-sm">| 350k</span>
            </p>
            <button className="bg-red-600 text-md flex gap-2 items-center text-white px-24 text-center py-2 rounded-lg mt-2">
              <img className="w-8" src="/Tickets.png" />
              <span>See Showtime</span>
            </button>
            <button className="bg-red-300 text-md flex gap-2 items-center text-white px-12 text-center py-2 rounded-lg mt-2">
              <img className="w-8" src="/List.png" />
              <span>More Watch options</span>
            </button>

            <img
              src="/Group.png"
              className="w-full h-72 object-cover rounded-lg pt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
