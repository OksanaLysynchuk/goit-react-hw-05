import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTIxYzM0NGZjMDgzNTdiM2VhZjRjZDg5MWRiZjIxYyIsInN1YiI6IjY2NTIxZjUzN2Y5ZTQ4NzYzMjE3MGU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1K93czyGxFT3cP6tMjQoF0ZMc9b9f15kEGKkDncyyKI`,
        },
      })
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}
