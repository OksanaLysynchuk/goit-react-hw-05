import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList.jsx";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTIxYzM0NGZjMDgzNTdiM2VhZjRjZDg5MWRiZjIxYyIsInN1YiI6IjY2NTIxZjUzN2Y5ZTQ4NzYzMjE3MGU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1K93czyGxFT3cP6tMjQoF0ZMc9b9f15kEGKkDncyyKI`,
            },
          }
        )
        .then((response) => setMovies(response.data.results))
        .catch((error) => console.error(error));
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newQuery = form.elements.search.value;
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
