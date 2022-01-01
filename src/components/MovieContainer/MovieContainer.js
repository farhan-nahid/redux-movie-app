import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovieAsync } from '../../features/movies/moviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.scss';

const MovieContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadMovieAsync()), [dispatch]);

  const movies = useSelector((state) => state.movies.moviesState.Search);

  return (
    <section id='movies' className='container'>
      <h4>Movies</h4>
      <div className='movies__container'>
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieContainer;
