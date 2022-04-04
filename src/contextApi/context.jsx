import React, { Children, createContext, useReducer } from "react";
import { reducer } from "./reducerFunction";

const context = createContext({});

const bookmarkData = localStorage.getItem("watchList")
  ? JSON.parse(localStorage.getItem("watchList"))
  : [];

console.log({ bookmarkData });
const defaultValue = {
  search: false,
  sideBar: false,
  toggleSearch: () => {},
  showSideBar: () => {},
  bookmark: bookmarkData,
  toggleBookmark: () => {},
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const showSideBar = () => {
    return dispatch({
      type: "SHOW_SIDEBAR",
      autoload: !state.sideBar,
    });
  };

  const toggleBookmark = (data) => dispatch({ type: "BOOKMARK", autoload: data });

  const toggleSearch = () => dispatch({ type: "SEARCH" });
  return (
    <context.Provider
      value={{
        sideBar: state.sideBar,
        showSideBar: showSideBar,
        search: state.search,
        bookmark: state.bookmark,
        toggleSearch: toggleSearch,
        toggleBookmark: toggleBookmark,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default context;
