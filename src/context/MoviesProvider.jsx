import React, { createContext, useContext, useReducer } from "react";
import { movies } from "../db/moviesData.js";
import { moviesReducer } from "../reducer/movies.reducer";

const MoviesContext = createContext();

const initialState = {
  movies: movies,
  watchList: [],
  starred: [],
  filteredMovies: movies,
  searchQuery: ""
};

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  return useContext(MoviesContext);
};
