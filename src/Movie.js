import React, { useState } from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

const Movie = ({ movie, handleSubmit }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.imageUrl} alt={movie.title} width={300} height={350} />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm movie={movie} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Movie;
