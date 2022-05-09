import "../style/movie.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");
  const image_api = "https://image.tmdb.org/t/p/w500";

  // const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d3ca35757329b1e58d8f3e823b92f650&query'
  useEffect(() => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=d3ca35757329b1e58d8f3e823b92f650&query=${search}&language=fr-fr`;
    axios.get(searchUrl).then((reponse) => {
      setMovieData(reponse.data.results);
    });
  }, [search]);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Search" onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
      {movieData.map((movie) => (
        <div className="cardMovie">
         <img src={`${image_api}${movie.poster_path}`}></img>
          <p>{movie.id}</p>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default Movie;
