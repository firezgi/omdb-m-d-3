import React from "react";
import MovieCard from "../MovieCard";

function MovieList({ movies }) {
  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID}
          title={movie.Title}
          posterUrl={movie.Poster}
          type={movie.Type}
        />
      ))}
    </div>
  );
}
MovieList.defaultProps={
    movies:[],
}

export default MovieList;
