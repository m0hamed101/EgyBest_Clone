import React from "react";
import "../Card_part/card.css";
// import { Test } from "../../test";

export const Card = ({ movie }) => {
  const handelmove = () =>window.location.replace('./test')
  return (
    <div onClick={handelmove} className="card" style={{ backgroundImage: `url(${movie.poster_link})` }}>
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
