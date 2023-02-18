import React, { useState } from "react";
import categories from "./categories";
import allMovies from "./data";

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("komedie");

  const resultMovies = allMovies.filter((oneMovie) => {
    return oneMovie["category"] === typeOfMovie;
  });

  console.log(resultMovies);

  return (
    <div className="App">
      <div className="btns">
        {categories.map((oneCategory, index) => {
          return (
            <button key={index} onClick={() => setTypeOfMovie(oneCategory)}>
              {oneCategory}
            </button>
          );
        })}
      </div>
      <div className="movies">
        {resultMovies.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div className="movie" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
