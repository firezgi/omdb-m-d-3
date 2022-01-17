
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/movieDetail/MovieDetail";
import { getMovieDetailsById, getMoviesBySearchTerm } from "./utils/utils";

function App() {
  const[searchTerm,setSearchTerm]=useState("lion");
  const[isMovieData,setIsMovieData]=useState(false);
  const[movie,setMovie]=useState({})

  // useEffect(()=>{
  //   setIsMovieData(true)
  //     getMoviesBySearchTerm(searchTerm)
  //     .then((res)=>{
  //       // console.log(res)
  //       setMovies(res)
  //     })
  // },[]);

  useEffect(()=>{
    setIsMovieData(true)
      getMovieDetailsById("tt2975590")
      .then((res)=>{
        console.log(res)
        setMovie(res)
      })
  },[])


  // const hab=movies.map=(movie,i)=>
  // {
  //   <div>
  //     {movie.Title}
  //   </div>
  // }
  // console.log(movies)
  return (
    
    
    <div className="App">
      {<hab/>}
      {isMovieData ? (
        <MovieCard
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
        />
      ) : (
        "Please refresh"
      )}
      {isMovieData ? (
        <MovieDetails
          title={movie.Title}
          rated={movie.Type}
          posterUrl={movie.Poster}
          runtime={movie.Runtime}
          genre={movie.Genre}
          plot={movie.Plot}
          actors={movie.Actors}
          rating={movie.imdbRating}
          rated={movie.Rated}
        />
      ) : (
        "Please refresh"
      )} 
H
    </div>
  );
}

export default App;
