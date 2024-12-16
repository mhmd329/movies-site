import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./ResultCard"
const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=7d6db7df`)
      .then((Response) => {
        if (Response.data.Search) {
          setMovies(Response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbId}>{<ResultCard movie={movie}/>}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Add;
