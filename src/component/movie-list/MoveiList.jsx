import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import tmdbapi from "../../api/tmdbapi";
import "./MovieList.css";

import { Link } from "react-router-dom";
import Img from "../../img/R.jpg";
import MovieCard from "../moveicard/MovieCard";

const MoveiList = ({ cat, type }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    switch (cat) {
      case "movie":
        return tmdbapi.getMovieList(type).then((res) => setMovie(res.data.results.slice(0, 15)));
      case "all":
        return tmdbapi.getTrendingList(cat).then((res) => setMovie(res.data.results.slice(0, 10)));
      default:
        return tmdbapi.getTvList(type).then((res) => setMovie(res.data.results.slice(0, 15)));
    }
  }, [cat, type]);
  return (
    <>
      <Swiper className="swiper_custom" slidesPerView={"auto"} spaceBetween={10} grabCursor={true}>
        {movie.map((data, index) => {
          return (
            <SwiperSlide>
              <Link to={`/${cat}/detail/${data.id}`} className="swiper_slide_a">
                <MovieCard {...data} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MoveiList;
