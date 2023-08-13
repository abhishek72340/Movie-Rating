import React from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MoviesProvider";

export const WatchList = () => {
  const { state, dispatch } = useMovies();

  if (state.watchList.length <= 0) {
    return <div>No movies in the watch list</div>;
  }

  return (
    <div className="movies-container">
      {state.watchList.map((movie, index) => (
        <div className="movie-card">
          <Link
            to={`/movie/${movie.id}`}
            key={index}
            className="movie-card-link"
          >
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
              className={`watchlist-button`}
              onClick={(e) => {
                e.stopPropagation();
                dispatch({
                  type: "REMOVE_FROM_WATCHLIST",
                  payload: movie.id
                });
              }}
            >
              Remove from Watchlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
