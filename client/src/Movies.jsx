const Movies = ({ movies }) => {
  return (
    <div className="row-movies">
      {movies.map((movie) => (
        <div className="col-movies">
          <ul>
            <li className="movie-poster"><img src={movie.Poster} alt={movie.Title} /></li>
            <li><b>{movie.Title}</b></li>
            <li>Type: {movie.Type}</li>
            <li>Year: {movie.Year}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;