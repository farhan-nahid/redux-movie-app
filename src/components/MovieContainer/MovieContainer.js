import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../features/movies/moviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.scss';

const MovieContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadMovies()), [dispatch]);

  const movies = useSelector((state) => state.movies.moviesState.Search);

  return (
    <section id='movies' className='container'>
      <h4>Movies</h4>
      <div className='movies__container'>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieContainer;
