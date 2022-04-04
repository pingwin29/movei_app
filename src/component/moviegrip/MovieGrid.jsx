import React, { useState, useEffect } from "react";
import MovieCard from "../moveicard/MovieCard";
import "./MovieGrid.css";

import Img from "../../img/R.jpg";
import tmdbapi from "../../api/tmdbapi";
import genlist from "../../api/genrelist";
import { Link, useLocation } from "react-router-dom";

const MovieGrid = ({ movie }) => {
  const { pathname } = useLocation();
  let category = pathname.split("/")[1];

  return (
    <>
      <div className="movie_grip_container">
        {movie.map((data, index) => {
          const url = `/${
            category == "watchlist" ? (data.title ? `movie` : `tv`) : category
          }/detail/${data.id}`;
          console.log({ url });
          return (
            <div className="movie_grip_item" key={index}>
              <Link to={url} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <MovieCard {...data} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieGrid;
