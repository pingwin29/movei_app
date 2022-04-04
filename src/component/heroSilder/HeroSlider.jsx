import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Img from "../../img/R.jpg";
import "swiper/css/pagination";
import "./HeroSilder.css";

import { Pagination, Autoplay, Navigation } from "swiper";
import tmdbapi from "../../api/tmdbapi";
import config from "../../api/config";
import { useNavigate } from "react-router-dom";
import context from "../../contextApi/context";

const HeroSlider = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    tmdbapi
      .getMovieList("popular")
      .then((res) => {
        const data = res.data.results.slice(0, 10);
        return setMovie(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="hero_section container-fluid px-0">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 10000 }}
        slidesPerView={1}
      >
        {movie.map((info, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderItem {...info} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const SliderItem = (movie) => {
  let navigate = useNavigate();
  const { original_title, overview, poster_path, backdrop_path, vote_average, id } = movie;

  const { bookmark, toggleBookmark } = useContext(context);
  const isExitBookmark = bookmark.find((data) => data.id == id);

  const BookMarkHandler = () => {
    toggleBookmark(movie);
  };
  return (
    <div
      className="slider_item row p-4 p-md-5"
      style={{ backgroundImage: `url(${config.originalImage(backdrop_path)})` }}
      // style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="slider_item_info col-12 col-md-7 text-center text-md-start">
        <h1 className="title">{original_title}</h1>
        <span className="badge bg-secondary my-3">Rating : {vote_average} </span>
        <p className="overview">{overview.slice(0, 200)} ...</p>
        <div className="btns">
          <button
            className="btn btn-normal px-3 me-5"
            onClick={() => navigate(`/movie/detail/${id}`)}
          >
            See More
          </button>
          <button className="btn btn-outline px-3" onClick={BookMarkHandler}>
            {isExitBookmark ? (
              <i className="fa-solid fa-bookmark bookmark-slash me-2"></i>
            ) : (
              <i className="fa-solid fa-bookmark me-2"></i>
            )}
            BookMark
          </button>
        </div>
      </div>
      <div className="slider_item_poster col-md-5 d-md-block d-none">
        <img className="img" srcSet={config.originalW500(poster_path)} alt="" />

        {/* <img className="img" src={Img} alt="" srcset="" /> */}
      </div>
    </div>
  );
};
export default HeroSlider;
