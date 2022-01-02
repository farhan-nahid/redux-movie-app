import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadDetailsAsync, removePrevDetail } from '../../features/movies/moviesSlice';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MovieDetail.scss';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDetailsAsync(id));
    return () => {
      dispatch(removePrevDetail());
    };
  }, [dispatch, id]);
  const moviesState = useSelector((state) => state.movies);

  const { Title, Plot, Poster, Actors, Language, Writer, Director, Released } = moviesState.detailsState;
  return (
    <>
      <Header />
      <section id='movie__details' className='container'>
        {moviesState.status === 'Pending' ? (
          <strong className='loading'>Loading...</strong>
        ) : (
          <>
            {moviesState.error && <strong className='error'>{moviesState.error}</strong>}
            <div className='details__card'>
              <span>
                <h3>{Title}</h3>
                <p>{Plot}</p>
                <h4>
                  Starts: <strong>{Actors}</strong>
                </h4>
                <h4>
                  Writer: <strong>{Writer}</strong>
                </h4>
                <h4>
                  Director: <strong>{Director}</strong>
                </h4>
                <h4>
                  Released: <strong>{Released}</strong>
                </h4>
                <h4>
                  Language: <strong>{Language}</strong>
                </h4>
              </span>
              <span>
                <img src={Poster} alt='Title' />
              </span>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default MovieDetail;
