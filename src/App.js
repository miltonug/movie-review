import './App.css';
import React from "react";
import MovieList from "./MovieList";

const App = () => {
  const movies = [];

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
