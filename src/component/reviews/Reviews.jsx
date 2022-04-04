import React, { useEffect, useState } from "react";
import config from "../../api/config";
import tmdbapi from "../../api/tmdbapi";
import "./Reviews.css";

import Img from "../../img/dummyCast.jpg";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews_container">
      {reviews.slice(0, 4).map((data, index) => {
        return <Review {...data} key={index} />;
      })}
    </div>
  );
};

const Review = ({ author_details, content, created_at }) => {
  const { avatar_path, name, rating, username } = author_details;
  const date = new Date(created_at);
  return (
    <div className="review_container">
      <div className="review_header">
        <img src={Img} alt="" srcset="" />
        <div>
          <h6 className="review_name">{username}</h6>
          <span className="review_date">
            {date.toDateString()} {date.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <div className="review_body">
        <p className="review_content">{content.slice(0, 200)} ...SeeMore</p>
      </div>
    </div>
  );
};

export default Reviews;
