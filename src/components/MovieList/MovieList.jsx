import { Link, useLocation } from "react-router-dom";
import CSS from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={CSS.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={CSS.movieItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
