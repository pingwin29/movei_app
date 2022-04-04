import React from "react";
import { Link } from "react-router-dom";
import MoveiList from "./MoveiList";

const MovieListContainer = () => {
  const Data = [
    {
      title: "Now Playing Movie",
      type: "now_playing",
      cat: "movie",
    },
    {
      title: "Top Rated Movie",
      type: "top_rated",
      cat: "movie",
    },
    {
      title: "UpComing",
      type: "upcoming",
      cat: "movie",
    },
    {
      title: "Airing_Today Tv",
      type: "airing_today",
      cat: "tv",
    },
    {
      title: "On The Air Tv",
      type: "on_the_air",
      cat: "tv",
    },
    {
      title: "Top Rated Tv",
      type: "top_rated",
      cat: "tv",
    },
  ];

  return (
    <div className="movie_list_container container position-relative">
      {Data.map((data, index) => {
        const url = `/${data.cat}/category/${data.type}`;
        console.log({ url });
        return (
          <div className="movie_list" key={index}>
            <div className="movie_list_header">
              <div className="movie_list_title">{data.title}</div>
              <Link to={url} className="movie_list_see_more">
                See More
              </Link>
            </div>
            <MoveiList type={data.type} key={index} cat={data.cat} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieListContainer;
