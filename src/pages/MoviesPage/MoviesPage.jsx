import { useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList.jsx";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
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
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
