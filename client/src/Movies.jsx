const Movies = ({ movies }) => {
  return (
    <div className="row-movies">
      {movies.map((movie) => (
        <div className="col-movies">
          <ul>
            <li className="movie-poster"><img src={movie.Poster} alt={movie.Title} /></li>
            <li><b>{movie.Title}</b></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;