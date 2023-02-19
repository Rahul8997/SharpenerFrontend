import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const handleDelete= async (e)=>{
    e.preventDefault();
    console.log(props.movie)
    const responce=await fetch(`https://react-movies-412a3-default-rtdb.firebaseio.com/movies/${props.movie.id}.json`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      }
    })
    props.fetchMoviesHandler();
    console.log(responce);
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button style={{background:"red"}} onClick={handleDelete}>Delete Movie</button>
    </li>
  );
};

export default Movie;
