import React from "react";
import Star from "../Images/icons8-star-filled-96.png";

const Rating = ({ rating, size }) => {
  let starSize = size;
  let starStyle = {
    width: starSize + "px",
    height: starSize + "px",
  };
  const createRating = (n) => {
    let ratings = [];

    let star = <img src={Star} style={starStyle} alt="star icon" />;

    for (let i = 0; i < n; i++) {
      ratings.push(star);
    }

    return ratings;
  };

  let ratings = createRating(rating);

  return <div>{ratings.map((val) => val)}</div>;
};

Rating.defaultProps = {
  size: "30",
};

export default Rating;
