export const moviesReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WATCHLIST":
        return {
          ...state,
          watchList: [...state.watchList, action.payload]
        };
  
      case "REMOVE_FROM_WATCHLIST":
        return {
          ...state,
          watchList: state.watchList.filter(
            (movie) => movie.id !== action.payload
          )
        };
  
      case "ADD_TO_STARRED":
        return {
          ...state,
          starred: [...state.starred, action.payload]
        };
  
      case "REMOVE_FROM_STARRED":
        return {
          ...state,
          starred: state.starred.filter((movie) => movie.id !== action.payload)
        };
  
      case "SET_SEARCH_QUERY":
        return {
          ...state,
          searchQuery: action.payload,
          filteredMovies: state.movies.filter((movie) =>
            movie.title.toLowerCase().includes(action.payload.toLowerCase())
          )
        };
      default:
        return state;
    }
  };
  