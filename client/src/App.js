import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies.jsx';
import useDebounce from './hooks/useDeboune.jsx';

function App() {
  const [search, setSearch] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [charLimit, setCharLimit] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const fetchData = async () => {
      if (search.length > 0 && search.length < 3) {
        setCharLimit(true);
      }
      if (search.length >= 3) {
        setNotFound(false);
        setCharLimit(false);
        setLoading(true);
        const data = await axios
          .get(`http://localhost:3001/api/search?keyword=${debouncedSearch}`)
          .then((data) => data.data.data);

        setLoading(false);
        if (data.message) {
          setNotFound(true);
          return setMovies([]);
        }
        setMovies(data.movies);
      }
    };
    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
      />
      {charLimit && <p>You must enter at least 3 characters to search</p>}
      {loading && <p>Loading...</p>}
      {notFound && (
        <p>
          Movies are not found with the keyword you entered. Try typing
          something else. Recommendation: Did you watched Interstellar?
        </p>
      )}
      {<Movies movies={movies} />}
    </div>
  );
}

export default App;
