import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './Components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [addedMovie,setAddedMovie]=useState({title:"",openingTxt:"",releaseDate:""});

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

  const handleAddMovie=(e)=>{
    e.preventDefault();
    let newMovieObj={
      ...addedMovie
    }
    console.log(newMovieObj)
  }

  
  const handleOpening=(e)=>{
    setAddedMovie({title:addedMovie.title,openingTxt:e.target.value,releaseDate:addedMovie.releaseDate})
    console.log("changing")
  }
  const handleDate=(e)=>{
    setAddedMovie({title:addedMovie.title,openingTxt:addedMovie.openingTxt,releaseDate:e.target.value})
    console.log("changing")
  }
  const handleTitle=(e)=>{
    setAddedMovie({title:e.target.value,openingTxt:addedMovie.openingTxt,releaseDate:addedMovie.releaseDate})
    console.log("changing")
  }
  return (
    <React.Fragment>
      
        <form className='addform'>
          <div className='my-3'>
            <div><label htmlFor="title" className='fw-bold'>Title</label></div>
            <div><input type="text" name="title" id="title" value={addedMovie.title} className='w-100 border border-dark border-2 rounded-3' onChange={handleTitle}/></div>
          </div>
          <div className='my-3'>
          <div><label htmlFor="opening-txt" className='fw-bold'>Opening Text</label></div>
          <div><input type="text" name="opening-txt" id="opening-txt" value={addedMovie.openingTxt} onChange={handleOpening} style={{height:"10rem",width:"100%",border:"2px solid black"}}/></div>
          </div>
          <div className='my-3'>
          <div><label htmlFor="date" className='fw-bold'>Release Date</label></div>
          <div><input type="date" name="date" id="date" value={addedMovie.releaseDate} onChange={handleDate} className='w-100 border border-dark border-2 rounded-3'/></div>
          </div>
          <div className='text-center'>
          <button className="form-btn" onClick={handleAddMovie}>Add Movies</button>
          </div>
        </form>
     
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