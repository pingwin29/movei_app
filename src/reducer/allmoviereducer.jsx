const allmoviereducer = (state, action) => {
  let newMovie;
  switch (action.type) {
    case "NEW_MOVIE":
      newMovie = {
        page: 1,
        totalPage: action.playload.totalPage,
        movie: action.playload.movies,
      };
      return { ...state, ...newMovie };

    case "MORE_PAGE":
      newMovie = {
        page: action.playload.page,
        movie: action.playload.movies,
      };
      return { ...state, ...newMovie };

    case "NO_MOVIE":
      newMovie = {
        page: 0,
        movie: [],
        totalPage: 0,
      };
      return { ...state, ...newMovie };

    case "SEARCH_MOVIE":
      newMovie = {
        searchPage: 1,
        searchTotalPage: action.playload.searchTotalPage,
        searchMovie: action.playload.searchMovie,
        query: action.playload.query,
      };
      return { ...state, ...newMovie };
    case "MORE_SEARCH_MOVIE":
      newMovie = {
        searchPage: state.searchPage + 1,
        searchTotalPage: state.searchTotalPage,
        searchMovie: action.playload.searchMovie,
      };
      return { ...state, ...newMovie };

    case "NO_SEARCH_MOVIE":
      newMovie = {
        searchPage: 0,
        searchTotalPage: 0,
        searchMovie: [],
      };
      return { ...state, ...newMovie };

    default:
      return state;
  }
};

export default allmoviereducer;
