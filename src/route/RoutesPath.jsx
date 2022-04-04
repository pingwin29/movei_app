import { Route, Routes } from "react-router-dom";

import React from "react";
import Home from "../page/Home";
import Watched from "../page/Watched";
import WatchList from "../page/WatchList";
import GenreCategory from "../page/GenreCategory";
import AllCategory from "../page/AllCategory";
import Detail from "../page/Detail";
const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/movie" element={<AllCategory />} />
      <Route path="/tv" element={<AllCategory />} />

      <Route path="/movie/detail/:id" element={<Detail />} />
      <Route path="/tv/detail/:id" element={<Detail />} />

      <Route path="/movie/category/:cat" element={<AllCategory />} />
      <Route path="/tv/category/:cat" element={<AllCategory />} />
      
      <Route path="tv/:cat/" element={<GenreCategory />} />
      <Route path="movie/:cat/" element={<GenreCategory />} />

      <Route path="/watched" element={<Watched />} />
      <Route path="/watchlist" element={<WatchList />} />
    </Routes>
  );
};

export default RoutesPath;
