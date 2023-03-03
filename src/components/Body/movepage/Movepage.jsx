import React, { useEffect, useState } from "react";
import "../movepage/move.css";
import { useParams } from "react-router-dom";
import { firestore } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Movepage = ({dark}) => {
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
          <h3 className={dark?'blue-bg movehaed':'movehaed'}>
            {movie === undefined ? "loding..." : `${movie.name}`}
          </h3>
          <div className="tt">
            <h1 className={dark?'blue-bg':''}>التصنيف</h1>
            <h2 className={dark?'blue-bg':''}>لا يناسب الاطفال</h2>
          </div>
          <div className="tt">
            <h1 className={dark?'blue-bg':''}>النوع</h1>
            <h2 className={dark?'blue-bg':''}>اكشن-دراما-خيال </h2>
          </div>
          <div className="tt">
            <h1 className={dark?'blue-bg':''}>النقييم</h1>
            <h2 className={dark?'blue-bg':''}>voice 350,730 -- 8.8 </h2>
          </div>
          <div className="tt">
            <h1 className={dark?'blue-bg':''}>المده</h1>
            <h2 className={dark?'blue-bg':''}>2:30:58 </h2>
          </div>
          <div className="tt">
            <h1 className={dark?'blue-bg':''}>الجوده</h1>
            <h2 className={dark?'blue-bg':''}>bluray.1080 </h2>
          </div>
          <div className="tt">
            <h1 className={dark?'blue-bg':''}>المترجم</h1>
            <h2 className={dark?'blue-bg':''}> شكرا اسلام الجزاوي</h2>
          </div>
          <div className="tt">
            <h1 className={dark?'blue-bg':''}>التقييم</h1>
            <h2 className={dark?'blue-bg':''}>80% </h2>
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
