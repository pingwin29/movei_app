import React, { useContext, useRef, useState } from "react";
import context from "../../contextApi/context";
import "./SerchBox.css";

const SearchBox = ({ searchHandler }) => {
  const { search, toggleSearch } = useContext(context);
  const refInput = useRef(null);

  const searchIconHandler = () => {
    refInput.current.value = "";
    searchHandler("");
    return toggleSearch();
  };

  return (
    <div className={`${search && "active"} search_box`}>
      <input
        type="text"
        placeholder="Search ..."
        onChange={(e) => searchHandler(e.target.value)}
        className="search_box_input"
        name=""
        ref={refInput}
      />
      <div className=" search_box_icon" onClick={searchIconHandler}>
        {search ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-search"></i>}
      </div>
    </div>
  );
};

export default SearchBox;
