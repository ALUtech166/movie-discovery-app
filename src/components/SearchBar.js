import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Fetch movie search results
    api.searchMovies(query)
      .then((data) => {
        setSearchResults(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [query]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page
    onSearch(query); // Call the onSearch callback with the query
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="font-bold bg-transparent m-0 block w-[100%] min-w-0 flex-auto rounded-l border border-solid-5 border-white-900 bg-clip-padding px-4 py-2 text-base text-md text-black outline-none transition duration-300 ease-in-out focus:border-black focus:text-white focus:shadow-te-black focus:outline-none dark:text-black dark:placeholder:text-black pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-6 text-white pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </form>

      {isLoading && <div>Loading...</div>}

      <ul>
        {searchResults.map((result) => (
          <li key={result.id} onClick={() => onSearch(result.id)}>
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
