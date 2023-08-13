import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../context/MoviesProvider";
import { isAddedToList } from "../utils/utils";

export const MovieDetail = () => {
  const { state, dispatch } = useMovies();
  const { movieId } = useParams();

  const movie = state.movies.find((item) => item.id === Number(movieId));

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-card">
        <img
          src={movie.imageURL}
          alt={movie.title}
          className="movie-details-image"
        />
        <div className="movie-details">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-summary">{movie.summary}</p>
          <p className="movie-text">Year: {movie.year}</p>
          <p className="movie-text">Genre: {movie.genre.join(", ")}</p>
          <p className="movie-text">Rating: {movie.rating}</p>
          <p className="movie-text">Director: {movie.director}</p>
          <p className="movie-text">Writer: {movie.writer}</p>
          <p className="movie-text">Stars: {movie.stars.join(", ")}</p>
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
      </div>
    </div>
  );
};
