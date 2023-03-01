import React, { useEffect, useState } from "react";
import "../movepage/move.css";
import { useParams } from "react-router-dom";
import { firestore } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Movepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getDocs(collection(firestore, "movies")).then((data) => {
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const { name } = useParams();

  const [movie, setMovie] = useState();
  useEffect(() => {
    setMovie(
      movies.find((item) => {
        return name === item.name;
      })
    );
  }, [movies, name]);
  // console.log(movie === undefined, movie)
  return (
    <div className="movecontaner">
      <div className="movedata">
        <div className="video">
          <img
            src={movie === undefined ? "loding..." : `${movie.poster_link}`}
            alt="moveimg"
          />
        </div>
        <div className="detels">
          <h3 className="movehaed">
            {movie === undefined ? "loding..." : `${movie.name}`}
          </h3>
          <div className="tt">
            <h1>التصنيف</h1>
            <h2>لا يناسب الاطفال</h2>
          </div>
          <div className="tt">
            <h1>النوع</h1>
            <h2>اكشن-دراما-خيال </h2>
          </div>
          <div className="tt">
            <h1>النقييم</h1>
            <h2>voice 350,730 -- 8.8 </h2>
          </div>
          <div className="tt">
            <h1>المده</h1>
            <h2>2:30:58 </h2>
          </div>
          <div className="tt">
            <h1>الجوده</h1>
            <h2>bluray.1080 </h2>
          </div>
          <div className="tt">
            <h1>المترجم</h1>
            <h2> شكرا اسلام الجزاوي</h2>
          </div>
          <div className="tt">
            <h1>التقين</h1>
            <h2>80% </h2>
          </div>
        </div>
        <div className="photo">
          <img
            className="photoo"
            src={movie === undefined ? "loding..." : `${movie.poster_link}`}
            alt=""
          />
          <button>للمشاهده والتحميل </button>
        </div>
      </div>
    </div>
  );
};
