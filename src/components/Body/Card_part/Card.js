import React from "react";
import "../Card_part/card.css";
import {Link} from 'react-router-dom'
export const Card = ({ movie}) => {
  return (
    <Link to={`${movie.name}`}>
      <div className="card" style={{ backgroundImage: `url(${movie.poster_link})` }}>
        <div className="detils">
          <div className="name">
            <div className="title">{movie.name}</div>
            <div className="discrip">{movie.year}</div>
          </div>
          <div className="rate">
            {movie.rank}
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};
