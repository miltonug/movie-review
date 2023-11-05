import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      imageUrl:
        "https://irs.www.warnerbros.com/gallery-jpeg/the_shawshank_redemption_posterlarge_0-675188670.jpg",
      synopsis:
        "Two imprisoned men bond over a number of years, finding solace and friendship in a harsh place.",
      rating: 4,
      reviews: [
        {
          id: 1,
          text: "The best movie I've ever seen!",
          rating: 4.5,
        },
        {
          id: 2,
          text: "A truly classic film.",
          rating: 4,
        },
      ],
    },
    {
      id: 2,
      title: "The Godfather",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      synopsis:
        "The aging patriarch of an organized crime dynasty wakes up one day to find himself the target of a murder conspiracy.",
      rating: 4.8,
      reviews: [
        {
          id: 3,
          text: "One of the greatest films ever made.",
          rating: 4.5,
        },
        {
          id: 4,
          text: "A masterpiece of cinema.",
          rating: 5,
        },
      ],
    },
  ]);

  const handleReviewFormSubmit = (movieId, review) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        movie.reviews.push(review);
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie movie={movie} handleReviewFormSubmit={handleReviewFormSubmit} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;