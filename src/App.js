import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import "./index.css"; // Import the Tailwind CSS file
import MovieCard from "../src/components/MovieCard";
import api from "../src/utils/api";
import SearchBar from '../src/components/SearchBar';

function App() {
  const [topMovies, setTopMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);


  useEffect(() => {
    // Fetch top 10 movies
    api
      .fetchTopMovies()
      .then((data) => setTopMovies(data))
      .catch((error) => console.error(error));
  }, []);

  // Define a function to handle search result selection
  const handleSearchResultSelect = (movieId) => {
    // Do something with the selected movie ID, e.g., display details
    setSelectedMovieId(movieId);
  };

  return (
    
    <div>
    

      <div class="flex flex-row justify-evenly px-8 p-12 text-center hero">
        <strong class="text-3xl cursor-pointer">
          <span class="text-red-600">Movie Box</span>
        </strong>
        <div class="flex justify-center">
          <div class="relative flex w-full flex-wrap items-stretch">
           
            {/* Render the SearchBar component and pass the handleSearchResultSelect function */}
      <SearchBar onSearch={handleSearchResultSelect}
 />

{/* Display selected movie details */}
{selectedMovieId && (
  <div>
    <h2>Selected Movie</h2>
    {/* Render the selected movie details here */}
    {/* You can fetch and display the movie details based on the selectedMovieId */}
  </div>
)}
            <button
              class="relative z-[2] flex items-center rounded-r bg-red-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
      
    </div>
        <router-link
          to="/bookmark"
          class="cursor-pointer flex gap-6 items-center"
        >
          Sign in
          <img
            class="w-10"
            src="https://dl.dropbox.com/s/s9fb1d9vughng58/bookmark-64.png"
          />
        </router-link>
      </div>
      <div class="flex justify-between px-24 pb-4 items-center">
        <h1 class="text-4xl font-extrabold">Featured Movie</h1>
        <h1 class="text-red-600">See more</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-4 px-24 pb-8">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
