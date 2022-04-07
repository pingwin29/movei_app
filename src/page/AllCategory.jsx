import React, { useContext, useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "../component/searchbox/SearchBox";
import tmdbapi from "../api/tmdbapi";
import MovieGrid from "../component/moviegrip/MovieGrid";
import allmoviereducer from "../reducer/allmoviereducer";
import context from "../contextApi/context";

const AllCategory = () => {
  const { pathname } = useLocation();
  const { search } = useContext(context);

  const category = pathname.split("/")[1];
  const type = pathname.split("/")[3];

  let keywords;
  let timeoutId;

  const intiValue = {
    page: 1,
    searchPage: 1,
    totalPage: 1,
    searchTotalPage: 1,
    movie: [],
    searchMovie: [],
    query: "",
  };

  const [movieInfo, dispatch] = useReducer(allmoviereducer, intiValue);

  useEffect(() => {
    let params = {
      sort_by: "popularity.desc",
    };
    (async () => {
      if (type) {
        switch (category) {
          case "tv":
            return await tmdbapi.getTvList(type);
          case "movie":
            return await tmdbapi.getMovieList(type);

          default:
            break;
        }
      }
      return await tmdbapi.discover(category, params);
    })().then((res) => {
      const { total_pages, results } = res.data;
      const movies = results;
      dispatch({
        type: "NEW_MOVIE",
        playload: {
          totalPage: total_pages,
          movies: movies,
        },
      });
    });
  }, [category]);

  const morePage = () => {
    if (search) {
      tmdbapi
        .search(category, { query: query, page: searchPage + 1 })
        .then((res) => {
          const { results } = res.data;
          const movies = [...searchMovie, ...results];
          return dispatch({
            type: "MORE_SEARCH_MOVIE",
            playload: { searchMovie: movies },
          });
        })
        .catch((error) => {
          dispatch({ type: "NO_MOVIE" });
        });
    } else {
      let params = { sort_by: "popularity.desc", page: page + 1 };
      (async () => {
        if (type) {
          params = {
            page: page + 1,
          };
          switch (category) {
            case "movie":
              return await tmdbapi.getMovieList(type, params);

            case "tv":
              return await tmdbapi.getTvList(type, params);

            default:
              break;
          }
        }
        return await tmdbapi.discover(category, params);
      })().then((res) => {
        const { results } = res.data;
        const movies = [...movie, ...results];
        dispatch({
          type: "MORE_PAGE",
          playload: {
            page: page + 1,
            movies: movies,
          },
        });
      });
    }
  };

  const searchHandler = (value) => {
    keywords = value.trim();

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      tmdbapi
        .search(category, { query: keywords })
        .then((res) => {
          const { results, total_pages } = res.data;
          const movies = results;
          return dispatch({
            type: "SEARCH_MOVIE",
            playload: { searchTotalPage: total_pages, searchMovie: movies, query: keywords },
          });
        })
        .catch((error) => {
          return dispatch({
            type: "NO_SEARCH_MOVIE",
          });
        });
    }, 500);
  };
  console.log({ movieInfo });

  const { page, searchPage, totalPage, searchTotalPage, movie, searchMovie, query } = movieInfo;
  return (
    <div className="container ">
      <div className=" text-center bg-black category_header py-2 w-100 mb-4">
        <h3 className="category_title text-uppercase mb-3">
          {type ? type : "All"} {category}
        </h3>
        <SearchBox searchHandler={searchHandler} />
      </div>

      {search ? (
        searchMovie.length > 1 ? (
          <MovieGrid movie={searchMovie} morePage={morePage} />
        ) : (
          <h2 className="text-center text-danger py-5">Oop... There is Nothing to Show</h2>
        )
      ) : (
        <MovieGrid movie={movie} morePage={morePage} />
      )}

      <div className="text-center py-4">
        {search
          ? searchPage < searchTotalPage && (
              <button className="btn btn-outline-primary px-5" onClick={morePage}>
                More
              </button>
            )
          : page <= totalPage && (
              <button className="btn btn-outline-primary px-5" onClick={morePage}>
                More
              </button>
            )}
      </div>
    </div>
  );
};

export default AllCategory;
