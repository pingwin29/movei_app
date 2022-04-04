import React, { useContext } from "react";
import config from "../../api/config";
import context from "../../contextApi/context";
import Img from "../../img/dummyimg.jpg";

import "./MovieCard.css";
const MovieCard = ({
  poster_path,
  original_title,
  release_date,
  backdrop_path,
  name,
  first_air_date,
  vote_average,
  id,
}) => {
  const path = poster_path ? poster_path : backdrop_path;
  const title = original_title ? original_title : name;
  const date = release_date ? release_date : first_air_date;
  const { bookmark } = useContext(context);
  const isExitBookmark = bookmark.find((data) => data.id === id);
  return (
    <div className="movie_card">
      <div className="movie_img">
        <img srcset={path == null ? Img : config.originalImage(path)} alt="" />
        <div className="movie_card_overlay">
          <div className="movie_card_overlay_inner">
            {isExitBookmark ? (
              <i className="fa-solid fa-bookmark bookmark-slash"></i>
            ) : (
              <i className="fa-solid fa-bookmark"></i>
            )}
            <div
              className={`rating_circle ${
                vote_average > 7.4
                  ? "green_border"
                  : vote_average < 3
                  ? "red_border"
                  : "yellow_border"
              }`}
            >
              <span>{Number(vote_average).toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* <img alt="" srcset={poster_path} /> */}
      </div>
      <div className="movie_mininfo">
        <p>{title}</p>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
