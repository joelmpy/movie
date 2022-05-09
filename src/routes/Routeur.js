import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Movie from "../component/Movie"
import Serie from "../component/Serie"

function Routeur() {
        return (
            <Routes>
            <Route path="/movie" element={<Movie />}></Route>
            <Route path="/serie" element={<Serie />}></Route>
            <Route path="/" element={<Home />}></Route>
        </Routes>
  
        )
      
}

export default Routeur