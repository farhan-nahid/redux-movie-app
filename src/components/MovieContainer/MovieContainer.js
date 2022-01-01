import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEpisodeAsync, loadMovieAsync, loadSeriesAsync } from '../../features/movies/moviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.scss';

const MovieContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieAsync());
    dispatch(loadSeriesAsync());
    dispatch(loadEpisodeAsync());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies);

  return (
    <section id='movies' className='container'>
      {movies.status === 'Pending' && <strong className='loading'>Loading...</strong>}
      {movies.error && <strong className='error'>{movies.error}</strong>}
      <h4>Movies</h4>
      <div className='movies__container'>
        {movies?.moviesState?.Search?.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
      <h4>Series</h4>
      <div className='movies__container'>
        {movies?.seriesState?.Search?.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
      <h4>Episode</h4>
      <div className='movies__container'>
        {movies?.episodeState?.Episodes?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieContainer;
