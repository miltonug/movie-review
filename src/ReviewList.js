import React from "react";
import Review from "./Review";

const ReviewList = ({reviews}) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;