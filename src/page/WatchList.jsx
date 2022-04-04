import React, { useContext } from "react";
import MovieGrid from "../component/moviegrip/MovieGrid";
import context from "../contextApi/context";
import Img from "../img/R.jpg";

const WatchList = () => {
  const { bookmark } = useContext(context);
  const movie = bookmark;

  return (
    <div className="container py-4">
      <div className="watchList_header">
        <h3 className="watchList_title">Watch List</h3>
      </div>
      <MovieGrid movie={movie} />
    </div>
  );
};

export default WatchList;
