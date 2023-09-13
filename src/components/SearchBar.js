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
        placeholder="Search for movies..."
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
