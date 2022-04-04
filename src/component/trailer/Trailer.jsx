import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import tmdbapi from "../../api/tmdbapi";

import { Pagination } from "swiper";

import "./Trailer.css";

const Trailer = ({ trailer }) => {
  const trailerData = trailer;
  return (
    <div className="trailer_swiper">
      {trailerData.map(({ key }, index) => {
        return (
          <div key={index} className="slide_item">
            <iframe
              width={`100%`}
              height={"100%"}
              src={`https://www.youtube.com/embed/${key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default Trailer;
