import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './Components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMoviesHandler=useCallback( async function() {
    setError(null)
    try {
      setLoading(true);
      let responce = await fetch('https://swapi.dev/api/films/');
      if(!responce.ok){
        throw new Error("Something went wrong...Retrying!");
      }
      responce = await responce.json();
      const transformedMovies = responce.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        }
      })
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  },[]);


  useEffect(()=>{
      fetchMoviesHandler();
  },[fetchMoviesHandler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>}
       {!loading && <MoviesList movies={movies} />}
       {!loading && movies.length===0 && !error && <p>No Movies Found.</p>}
       {!loading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;