import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style/home.css";
import video from "../assets/movie.mp4";

function Home() {
  const [MovieHome, setMovieHome] = useState([]);
  const image_api = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const urlHome =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d3ca35757329b1e58d8f3e823b92f650";

    axios(urlHome).then((result) => {
      setMovieHome(result.data.results);
    });
  }, []);

  return (
    <body>
      <div>
        <div className="bloc">
          <video autoPlay="autoplay" src={video}></video>
        </div>
        
        <div className="home">
        {MovieHome.map((movie) => (
          <img src={`${image_api}${movie.poster_path}`}></img>
        ))}
         </div>
      </div>
    </body>
  );
}

export default Home;
