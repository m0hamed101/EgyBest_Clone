import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card_part/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function SliderComponent({ movies }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const prependNumber = useRef(1);
  // Create array with 20 slides
  const [slides, setSlides] = useState(
    movies.map((movie, index) => {
      return <Card movie={movie} key={index} />;
    })
  );

  useEffect(() => {
    setSlides(
      movies.map((movie, index) => {
        return <Card movie={movie} key={index} />;
      })
    );
  }, [movies]);

  return (
    <Swiper onSwiper={setSwiperRef}
      breakpoints={{

        320: {
          width: 320,
          slidesPerView: 1,
        },

        481: {
          width: 481,
          slidesPerView: 2,
        },

        769: {
          width: 769,
          slidesPerView: 3,
        },

        1025: {
          width: 1025,
          slidesPerView: 4,
        },

        1201: {
          width: 1201,
          slidesPerView: 5,
        },

      }}
      navigation={true}
      centeredSlides={false}
      spaceBetween={30}
      pagination={{
        type: 'fraction',
      }}
      virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
