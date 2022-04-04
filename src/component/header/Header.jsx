import React, { useContext, useRef } from "react";
import context from "../../contextApi/context";

import "./Header.css";

const Header = () => {
  const { showSideBar } = useContext(context);
  const clickHandler = () => {
    showSideBar();
  };
  return (
    <div className="container-fluid header_section d-inline-block d-md-none">
      <div className="text-dark text-white p-2 " onClick={clickHandler}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Header;
