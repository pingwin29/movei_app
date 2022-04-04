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
      <Route path="/movei_app/" element={<Home />} />

      <Route path="/movei_app/movie" element={<AllCategory />} />
      <Route path="/movei_app/tv" element={<AllCategory />} />

      <Route path="/movei_app/movie/detail/:id" element={<Detail />} />
      <Route path="/movei_app/tv/detail/:id" element={<Detail />} />

      <Route path="/movei_app/movie/category/:cat" element={<AllCategory />} />
      <Route path="movei_app//tv/category/:cat" element={<AllCategory />} />
      
      <Route path="/movei_app/tv/:cat/" element={<GenreCategory />} />
      <Route path="/movei_app/movie/:cat/" element={<GenreCategory />} />

      <Route path="/movei_app/watched" element={<Watched />} />
      <Route path="/movei_app/watchlist" element={<WatchList />} />
    </Routes>
  );
};

export default RoutesPath;
