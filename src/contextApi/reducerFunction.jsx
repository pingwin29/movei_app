import React from "react";

export function reducer(state, action) {
  console.log({ action });
  switch (action.type) {
    case "SHOW_SIDEBAR":
      return { ...state, sideBar: action.autoload };

    case "SEARCH":
      return { ...state, search: !state.search };

    case "BOOKMARK":
      const prevBookMark = state.bookmark;

      let newBookMark;
      const isExist = prevBookMark.find((data) => data.id == action.autoload.id);
      if (isExist) {
        console.log("exist");
        newBookMark = prevBookMark.filter((data) => data.id != action.autoload.id);
        console.log({ newBookMark });
      } else {
        console.log("not exist");
        newBookMark = [...prevBookMark, action.autoload];
        console.log({ newBookMark });
      }
      localStorage.setItem("watchList", JSON.stringify(newBookMark));

      // let newBookMark = [...prevBookMark];

      return { ...state, bookmark: newBookMark };

    default:
      return state;
  }
}
