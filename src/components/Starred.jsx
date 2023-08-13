import React from "react";
import { useMovies } from "../context/MoviesProvider";
import { Link } from "react-router-dom";

export const Starred = () => {
  const { state, dispatch } = useMovies();

  if (state.starred.length <= 0) {
    return <div>No movies are starred</div>;
  }

  return (
    <div className="movies-container">
      {state.starred.map((movie) => (
        <div key={movie.id} className="movie-card">
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
              className="star-button"
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "REMOVE_FROM_STARRED", payload: movie.id });
              }}
            >
              Unstar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
