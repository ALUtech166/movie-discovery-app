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

  return (
    <div>
      <input
        type="text"
        placeholder="what do you want to watch?"
        class=" font-bold relative m-0 -mr-px block w-[100%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-clip-padding px-3 py-2 text-base text-md text-black outline-none transition duration-300 ease-in-out focus:border-primary focus:text-black focus:shadow-te-primary focus:outline-none dark:text-black dark:placeholder:text-black"

        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

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
