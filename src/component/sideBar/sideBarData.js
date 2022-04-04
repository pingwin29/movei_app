export const sideBarData = [
  {
    menu: "Home",
    path: "/",
    type: "normal",
    Icon: "fa-house",
  },
  {
    menu: "Movie",
    // subMenu: [
    //   {
    //     name: "playing",
    //     path: "/movie/now_playing",
    //   },
    //   ,
    //   {
    //     name: "popular",
    //     path: "/movie/popular",
    //   },
    //   {
    //     name: "top_rated",
    //     path: "/movie/top_rated",
    //   },
    //   {
    //     name: "upcoming",
    //     path: "/movie/upcoming",
    //   },
    // ],
    Icon: "fa-video",
    type: "normal",
    path: "/movie",
  },
  {
    menu: "Tv",
    // subMenu: [
    //   {
    //     name: "latest",
    //     path: "/tv/latest",
    //   },
    //   {
    //     name: "airing_today",
    //     path: "/tv/airing_today",
    //   },
    //   ,
    //   {
    //     name: "on_air",
    //     path: "/tv/on_air",
    //   },
    //   {
    //     name: "popular",
    //     path: "/tv/popular",
    //   },
    //   {
    //     name: "top_rated",
    //     path: "/tv/top_rated",
    //   },
    // ],
    Icon: "fa-tv",
    type: "normal",
    path: "/tv",
  },

  {
    menu: "Genre Movie",
    subMenu: [
      {
        name: "Action",
        path: "movie/action",
      },
      {
        name: "Adventure",
        path: "movie/adventure",
      },
      {
        name: "Animation",
        path: "movie/animation",
      },
      ,
      {
        name: "Comedy",
        path: "movie/comedy",
      },
      {
        name: "Crime",
        path: "movie/crime",
      },
      {
        name: "Documentary",
        path: "movie/documentary",
      },
      {
        name: "Drama",
        path: "movie/drama",
      },
      {
        name: "Family",
        path: "movie/family",
      },
      {
        name: "Fantasy",
        path: "movie/fantasy",
      },
      {
        name: "History",
        path: "movie/history",
      },
      {
        name: "Horror",
        path: "movie/horror",
      },
      {
        name: "Music",
        path: "movie/music",
      },
      {
        name: "Mystery",
        path: "movie/mystery",
      },
      {
        name: "Romance",
        path: "movie/romance",
      },
      {
        name: "Science",
        path: "movie/science",
      },
      {
        name: "Triller",
        path: "movie/triller",
      },
      {
        name: "War",
        path: "movie/war",
      },
      {
        name: "Western",
        path: "movie/Western",
      },
    ],
    type: "dropDown",
    Icon: "fa-book",
  },
  {
    menu: "Genre Tv",
    subMenu: [
      {
        name: "Action",
        path: "tv/action&adventure",
      },
      {
        name: "Animation",
        path: "tv/animation",
      },
      ,
      {
        name: "Comedy",
        path: "tv/comedy",
      },
      {
        name: "Crime",
        path: "tv/crime",
      },
      {
        name: "Documentary",
        path: "tv/documentary",
      },
      {
        name: "Drama",
        path: "tv/drama",
      },
      {
        name: "Family",
        path: "tv/family",
      },
      {
        name: "Kids",
        path: "tv/kids",
      },
      {
        name: "Mystery",
        path: "tv/mystery",
      },
      {
        name: "News",
        path: "tv/news",
      },
      {
        name: "reality",
        path: "tv/reality",
      },
      {
        name: "Soap",
        path: "tv/soap",
      },
      {
        name: "Talk",
        path: "tv/talk",
      },
      {
        name: "War",
        path: "tv/war",
      },
      {
        name: "Western",
        path: "tv/Western",
      },
    ],
    type: "dropDown",
    Icon: "fa-book",
  },

  {
    menu: "",
    Icon: "",
    path: "#",
    type: "normal",
  },
  {
    menu: "WatchList",
    Icon: "fa-list",
    path: "/watchlist/",
    type: "normal",
  },
];
