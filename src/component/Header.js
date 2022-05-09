import React from "react"
import { Link } from "react-router-dom"
import "../style/header.css"


function Header () {
    return (
        <div className="nav">
        <header className="header">
          <div>
            <span>LOGO 😊👌</span>
          </div>
        </header>
        <nav className="nav-bar">
          <ul className="nav-link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movie">Movie</Link></li>
            <li><Link to="/serie">Serie</Link></li>
          </ul>
        </nav>

        <div>
          
        </div>

      </div>
    )
}

export default Header