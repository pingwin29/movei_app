import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Cast.css";

import Img from "../../img/dummyCast.jpg";
import tmdbapi from "../../api/tmdbapi";
import config from "../../api/config";

const Cast = ({ credits }) => {
  const cast = credits;
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={20} grabCursor={true} className="cast_swiper">
      {cast.map(({ profile_path, name }, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="cast_img">
              <img src={profile_path ? config.originalImage(profile_path) : Img} alt="" />
            </div>
            <div className="cast_name_container">
              <h6 className="cast_name">{name}</h6>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Cast;
