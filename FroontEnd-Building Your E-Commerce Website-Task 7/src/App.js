import React, { useState } from 'react';

import MoviesList from './Components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchMoviesHandler() {
    setLoading(true);
    let responce = await fetch('https://swapi.dev/api/films/');
    responce = await responce.json();
    const transformedMovies = responce.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }
    })
    setLoading(false);
    setMovies(transformedMovies);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>}
       {!loading && <MoviesList movies={movies} />}
       {!loading && movies.length===0 && <p>No Movies Found.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;