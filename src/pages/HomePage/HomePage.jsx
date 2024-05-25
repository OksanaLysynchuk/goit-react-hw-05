import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList.jsx";
import CSS from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTIxYzM0NGZjMDgzNTdiM2VhZjRjZDg5MWRiZjIxYyIsInN1YiI6IjY2NTIxZjUzN2Y5ZTQ4NzYzMjE3MGU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1K93czyGxFT3cP6tMjQoF0ZMc9b9f15kEGKkDncyyKI`,
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={CSS.homepage}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}
