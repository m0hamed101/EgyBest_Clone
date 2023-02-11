import React from 'react'
import "../Card_part/card.css"

export const Card = ({ movie }) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${movie.poster_link})` }}
    >
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
  );
};
