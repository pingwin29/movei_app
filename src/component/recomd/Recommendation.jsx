import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Recommendations.css";

import Img from "../../img/dummyCast.jpg";
import tmdbapi from "../../api/tmdbapi";
import config from "../../api/config";
import MovieCard from "../moveicard/MovieCard";
import { Link } from "react-router-dom";

const Recommendations = ({ recommendations, cat, id }) => {
  const red = recommendations;
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={20} grabCursor={true} className="red_swiper">
      {red.map((data, index) => {
        return (
          <SwiperSlide key={index}>
            <Link to={`/${cat}/detail/${data.id}`}>
              <MovieCard {...data} />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Recommendations;
