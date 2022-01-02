import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { loadEpisodeAsync, loadMovieAsync, loadSeriesAsync } from '../../features/movies/moviesSlice';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.scss';

const MovieContainer = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  useEffect(() => {
    dispatch(loadMovieAsync());
    dispatch(loadSeriesAsync());
    dispatch(loadEpisodeAsync());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies);

  return (
    <section id='movies' className='container'>
      {movies.status === 'Pending' ? (
        <strong className='loading'>Loading...</strong>
      ) : (
        <>
          {movies.error && <strong className='error'>{movies.error}</strong>}
          <h4>Movies</h4>
          <Slider {...settings}>
            {movies?.moviesState?.Search?.map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
          </Slider>
          <h4>Series</h4>
          <Slider {...settings}>
            {movies?.seriesState?.Search?.map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
          </Slider>
          <h4>Episode</h4>
          <Slider {...settings}>
            {movies?.episodeState?.Episodes?.map((episode, idx) => (
              <EpisodeCard key={idx} episode={episode} />
            ))}
          </Slider>
        </>
      )}
    </section>
  );
};

export default MovieContainer;
