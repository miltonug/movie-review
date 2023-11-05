import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <h6>{review.reviewTitle}</h6>
      <p>{review.reviewBody}</p>
    </div>
  );
};

export default Review;