import React from 'react';
import { Link } from "react-router-dom";

export default () => {
    return (
      <nav className="navbar navbar-dark bg-dark text-left" style={{justifyContent: 'flex-start'}}>
        <Link className="navbar-brand" to="/">        
          Google - Star Wars 
        </Link>
        <li className="nav-item">
          <Link to="/people" style={{color: 'white'}}>People</Link>
        </li>
        <li className="nav-item">
          <Link to="/starship" style={{color: 'white'}}>Starships</Link>
        </li>
      </nav>
    );
  }  