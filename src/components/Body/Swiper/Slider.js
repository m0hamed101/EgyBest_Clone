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

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
  };
  return (
    <Swiper onSwiper={setSwiperRef} slidesPerView={5} navigation={true} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
