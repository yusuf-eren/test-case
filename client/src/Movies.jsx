const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <ul style={{ listStyleType: "none" }} key={movie.imdbID}>
          <li><img src={movie.Poster} alt={movie.Title} style={{ height: "100px", width: "100px" }} /></li>
          <li>{movie.Title}</li>
          <li>{movie.Year}</li>
          <li>{movie.Type}</li>
        </ul>
      ))}
    </div>
  );
};

export default Movies;