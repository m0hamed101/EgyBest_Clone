import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../firebaseConfig";
import "../Body/body.css";
import SliderComponent from "./Swiper/Slider";

export const Body = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getDocs(collection(firestore, "movies")).then((data) => {
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="body">
      <div className="body_title">الاكثر مشاهده</div>
      <div className="body_cards">
        <SliderComponent movies ={movies} /> 
      </div>

      <div className="body_title">احدث الافلام</div>
      <div className="body_cards">
        <SliderComponent movies ={movies} /> 
      </div>
    </div>
  );
};
