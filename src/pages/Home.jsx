import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, []);

  const movieList = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Info goes here! */}
        <h1>{movieList}</h1>
      </main>
    </>
  );
}

export default Home;
