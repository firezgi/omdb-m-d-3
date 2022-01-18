import React from "react";
import MovieCard from "../MovieCard";

function MovieList({ movies }) {
  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          title={movie.Title}
          posterUrl={movie.Poster}
          type={movie.Type}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
