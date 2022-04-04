import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import config from "../api/config";
import tmdbapi from "../api/tmdbapi";
import Cast from "../component/cast/Cast";
import Recommendations from "../component/recomd/Recommendation";
import Reviews from "../component/reviews/Reviews";
import Trailer from "../component/trailer/Trailer";
import context from "../contextApi/context";
import Img from "../img/dummy.jpg.crdownload";

const Detail = () => {
  const { bookmark, toggleBookmark } = useContext(context);

  const { pathname } = useLocation();
  const category = pathname.split("/")[1];
  const id = pathname.split("/")[3];

  const [movieInfo, setMovieInfo] = useState({
    movieDetail: {},
    credits: [],
    recommendations: [],
    reviews: [],
    trailer: [],
  });

  useEffect(() => {
    const promises = [
      tmdbapi.detail(category, id),
      tmdbapi.credits(category, id),
      tmdbapi.recommendations(category, id),
      tmdbapi.reviews(category, id),
      tmdbapi.videos(category, id),
    ];

    Promise.all(promises)
      .then((res) => {
        setMovieInfo({
          movieDetail: res[0].data,
          credits: res[1].data.cast,
          recommendations: res[2].data.results,
          reviews: res[3].data.results,
          trailer: res[4].data.results,
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => console.log({ err }));
  }, [category, id]);

  console.log({ movieInfo });

  const {
    backdrop_path,
    original_title,
    original_name,
    release_date,
    last_air_date,
    vote_average,
    overview,
    genres,
    runtime,
  } = movieInfo.movieDetail;

  // to check movie is already bookmark
  const isExitBookmark = bookmark.find((data) => data.id == id);

  return (
    <div>
      <div
        className="detail_hero_section"
        style={{ backgroundImage: `url(${config.originalImage(backdrop_path)})` }}
      >
        <div className="detail_hero_info_container text-white container">
          <h1 className="d-flex align-items-center">
            {original_title || original_name}
            <span
              className="bookmark"
              onClick={() => {
                toggleBookmark(movieInfo.movieDetail);
              }}
            >
              {isExitBookmark ? (
                <i className="fa-solid fa-bookmark bookmark-slash"></i>
              ) : (
                <i className="fa-solid fa-bookmark"></i>
              )}
            </span>
          </h1>
          <div className="miniDetail_hero_section">
            <i className="fa-solid fa-star"></i>
            <span>{vote_average}</span>
            {genres &&
              genres.map((data, index) => (
                <Link key={index} to={`/${category}/${data.name}`} className="dot">
                  {data.name}
                </Link>
              ))}
            <span className="dot">{release_date || last_air_date}</span>
            {runtime && (
              <span className="dot">
                {Math.floor(runtime / 60)}hr {Math.floor(runtime % 60)}min
              </span>
            )}
          </div>
          <p className="text-uppercase">{category} Overview</p>
          <p className="detail_hero_info">{overview}</p>
        </div>
      </div>
      <div className="container">
        <div className=" py-3">
          <h5 className="mb-4">Cast</h5>
          <Cast credits={movieInfo.credits} />
        </div>

        <div className=" py-3">
          <h5 className="mb-4">Trailer</h5>
          <Trailer trailer={movieInfo.trailer} />
        </div>

        <div className=" py-3">
          <h5 className="mb-4">Reviews</h5>
          <Reviews reviews={movieInfo.reviews} />
        </div>

        <div className=" py-3">
          <h5 className="mb-4">Recommad {category}</h5>
          <Recommendations cat={category} id={id} recommendations={movieInfo.recommendations} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
