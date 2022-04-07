import React, { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import tmdbapi from "../api/tmdbapi";
import MovieGrid from "../component/moviegrip/MovieGrid";
import genrelist from "../api/genrelist";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "NEW_MOVIE":
      return {
        page: 1,
        totalPage: action.autoload.total_pages,
        movie: action.autoload.movies,
      };
    case "MORE_PAGE":
      return {
        page: action.autoload.more_page,
        totalPage: state.totalPage,
        movie: action.autoload.movies,
      };

    default:
      return state;
  }
};

const AllCategory = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[1];
  const type = pathname.split("/")[2];

  const intiValue = {
    page: 1,
    totalPage: 1,
    movie: [],
  };

  const [movieInfo, dispatch] = useReducer(reducerFunction, intiValue);

  // genre id for search genre movie
  const { id } = genrelist.find((data) => {
    return data.name.toLocaleLowerCase() == type.toLocaleLowerCase();
  });

  useEffect(() => {
    tmdbapi.discover(category, { with_genres: id }).then((res) => {
      const { total_pages, results } = res.data;
      const movies = results;
      return dispatch({
        type: "NEW_MOVIE",
        autoload: { total_pages, movies },
      });
    });
  }, [category, type]);

  const morePage = () => {
    const more_page = page + 1;
    tmdbapi.discover(category, { with_genres: id, page: more_page }).then((res) => {
      const { results } = res.data;
      const movies = [...movie, ...results];
      return dispatch({
        type: "MORE_PAGE",
        autoload: { more_page, movies },
      });
    });
  };

  const { movie, totalPage, page } = movieInfo;
  return (
    <div className="container">
      <div className="category_header bg-black py-2 w-100 mb-4">
        <h3 className="category_title text-center text-uppercase">
          {category} {type}
        </h3>
      </div>

      <MovieGrid movie={movie} morePage={morePage} />

      <div className="text-center py-4">
        {page < totalPage && (
          <button className="btn btn-outline-primary px-5" onClick={morePage}>
            More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllCategory;
