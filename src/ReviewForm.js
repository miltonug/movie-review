import React from "react";
import {useState} from "react";

const ReviewForm = (props) => {
  const [reviewTitle, setTitle] = useState("");
  const [reviewBody, setBody] = useState("");

const handleSubmit = (event) => {
    const newReview = {
      reviewTitle,
      reviewBody,
    };

    props.movie.reviews.push(newReview);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Leave a review</h4>

      <input type="text" placeholder="Review title"
        value={reviewTitle}
        onChange={(event) => setTitle(event.target.value)}
      /><br></br>

      <textarea placeholder="Your review"
        value={reviewBody}
        onChange={(event) => setBody(event.target.value)}
      /><br></br>

      <button id="submit" type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;