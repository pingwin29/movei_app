import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axiosClient from "./api/axiosClient";
import tmdbapi from "./api/tmdbapi";
import RoutesPath from "./route/RoutesPath";
import Header from "./component/header/Header";
import SideBar from "./component/sideBar/SideBar";
import { ContextProvider } from "./contextApi/context";
import Img from "./img/dummyimg.jpg";

function App() {
  return (
    <ContextProvider>
      <div className="container-fluid bg-black text-white">
        <div className="row">
          <div className="col-3 px-0">
            <SideBar />
          </div>
          <div className="col-12 col-md-9 position-relative px-0">
            <Header />
            <RoutesPath />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
