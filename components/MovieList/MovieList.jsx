import Movie from '../Movie';
import styles from './movieList.module.css';

export default function MovieList({ movieList, showMovieList, searchList }) {
  return (
    <div className={styles.listContainer}>
      {movieList && showMovieList
        ? movieList.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              popularity={movie.popularity}
              voteCount={movie.vote_count}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
          ))
        : searchList.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              popularity={movie.popularity}
              voteCount={movie.vote_count}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
            />
          ))}
    </div>
  );
}
