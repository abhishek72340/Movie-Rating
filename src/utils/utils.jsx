export const isAddedToList = (movieId, movies) => {
    return movies.some((item) => item.id === movieId);
  };
  