
import { useEffect, useState } from "react";
import "./App.css";
// import MovieCard from "./components/MovieCard";
// import MovieDetails from "./components/movieDetail/MovieDetail";
import MovieList from "./components/MovieList/MovieList";
import { getMovieDetailsById, getMoviesBySearchTerm } from "./utils/utils";

function App() {
  const[searchTerm,setSearchTerm]=useState("spiderman");
  const[isMovieData,setIsMovieData]=useState(false);
  const[movie,setMovie]=useState({})
  const[movies,setMovies]=useState([])

  useEffect(()=>{
    setIsMovieData(true)
      getMoviesBySearchTerm(searchTerm)
      .then((res)=>{
        console.log(res)
        setMovies(res)
      })
  },[searchTerm]);

  // useEffect(()=>{
  //   setIsMovieData(true)
  //     getMovieDetailsById("tt2975590")
  //     .then((res)=>{
  //       console.log(res)
  //       setMovie(res)
  //     })
  // },[])


  
  console.log(movies)
  return (
    
    
    <div className="App">
      <p>hi</p>
      <MovieList
      movies={movies}/>

      {/* {isMovieData ? (
        <MovieCard
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
        />
      ) : (
        "Please refresh"
      )}  */}
      {/* {isMovieData ? (
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
      )}   */}

    </div>
  );
}

export default App;
