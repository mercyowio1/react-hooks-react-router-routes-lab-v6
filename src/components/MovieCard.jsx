import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time} minutes</p>
      <p>Genres: {movie.genres.join(", ")}</p>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </div>
  );
}

export default MovieCard;
