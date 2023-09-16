import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import "./index.css"; // Import the Tailwind CSS file
import MovieCard from "../src/components/MovieCard";

import api from "../src/utils/api";
import SearchBar from "../src/components/SearchBar";

function App() {
  const [topMovies, setTopMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch top 10 movies
    api
      .fetchTopMovies()
      .then((data) => {
        setTopMovies(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Define a function to handle search result selection
  const handleMovieSelect = (movieId) => {
    // Fetch movie details by ID and update selectedMovie state
    api.fetchMovieDetails(movieId)
      .then((data) => {
        setSelectedMovie(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div class="hero relative">
        <div class="flex flex-row justify-evenly px-8 p-12  py-56 pt-6">
          <strong class="text-3xl cursor-pointer">
            <img class="w-36" src="/Logo.png" />
          </strong>
          <div class="flex justify-center">
            <div class="relative flex w-full flex-wrap items-stretch text-white">
              {/* Render the SearchBar component and pass the handleSearchResultSelect function */}
              <SearchBar onSearch={handleMovieSelect } />

               {/* Render MovieCard with selected movie details */}
             {selectedMovie && <MovieCard movie={selectedMovie} />}
              
            </div>
          </div>
          <div></div>
          <router-link
            to="/bookmark"
            class="cursor-pointer flex gap-6 items-center"
          >
            <img class="w-36" src="/Menu.png" />
          </router-link>

          <div class="absolute w-[300px] h-[300px] left-[50px] top-[200px]">
            <h1 class="text-5xl font-extrabold text-white">
              John Wick 3 : <br />
              Parabellum
            </h1>

            <div className="flex gap-8 pt-4 items-center">
              <div className="flex gap-4">
              <img class="w-10" src="/imdb.png" />
               <p className="text-white text-sm">86.0/100</p>
              </div>

              <img class="w-15" src="/Rotten.png" />
            </div>

            <p class="text-sm text-justify text-white pt-2">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>

           
            <button
              class="group mb-12 bg-hover shadow-lg uppercase rounded-lg relative h-12 mt-2 cursor-pointer hover:transform hover:translate-x-2 hover:transition-transform hover:duration-300 shadow-red-600 hover:shadow-2xl w-48 overflow-hidden rounded-lg text-lg shadow-2xl">
              <div
                class="absolute inset-0 w-full bg-red-600 -transition-all duration-[250ms] ease-out group-hover:w-full">
              </div>
              <span class="relative inline-flex items-center gap-2 text-white group-hover:text-white">
              
              <img class="w-5" src="/Play.svg" />

                Watch Trailer
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-between px-24 pb-12 items-center pt-12">
        <h1 class="text-5xl font-extrabold">Featured Movie</h1>
        <h1 class="text-red-600">See more</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-4 px-24 pb-8">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>


      <footer className="bg-white py-4">
      <div className="flex justify-center space-x-4">
        {/* Social Media Icons */}
        <a href="#" className="text-black hover:text-blue-500">
        <img class="w-36" src="/Social.png" />

        </a>
    
      </div>

      <div className="flex justify-center space-x-4 pt-2 text-sm">
        {/* Three Words */}
        <p className="text-black font-bold">Conditions of Use</p>
        <p className="text-black font-bold">Privacy & Policy</p>
        <p className="text-black font-bold">Press Room</p>
        </div>
        <div className="flex justify-center space-x-4 pt-2 text-sm">
        {/* Copyright Notice */}
        <p className="text-black">© 2021 MovieBox by Adriana Eka Prayudha  </p>
        </div>
    </footer>

      
    </div>
  );
}

export default App;
