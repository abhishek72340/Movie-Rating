import React from "react";
import { useMovies } from "../context/MoviesProvider";
import { Link } from "react-router-dom";
import { isAddedToList } from "../utils/utils";

export const Movies = () => {
  const { state, dispatch } = useMovies();

  return (
    <div className="movies-container">
      {state.filteredMovies.map((movie, index) => (
        <div key={index} className="movie-card">
          <Link to={`/movie/${movie.id}`} className="movie-card-link">
            <img
              src={movie.imageURL}
              alt={movie.title}
              className="movie-image"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-summary">{movie.summary}</p>
          </Link>
          <div className="actions">
            <button
              className={`star-button`}
              onClick={(e) => {
                e.stopPropagation();
                if (isAddedToList(movie.id, state.starred)) {
                  dispatch({ type: "REMOVE_FROM_STARRED", payload: movie.id });
                } else {
                  dispatch({ type: "ADD_TO_STARRED", payload: movie });
                }
              }}
            >
              {isAddedToList(movie.id, state.starred) ? "Unstar" : "Star"}
            </button>
            <button
              className={`watchlist-button`}
              onClick={(e) => {
                e.stopPropagation();
                if (isAddedToList(movie.id, state.watchList)) {
                  dispatch({
                    type: "REMOVE_FROM_WATCHLIST",
                    payload: movie.id
                  });
                } else {
                  dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
                }
              }}
            >
              {isAddedToList(movie.id, state.watchList)
                ? "Added to Watchlist"
                : "Add to Watchlist"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
