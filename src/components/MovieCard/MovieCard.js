import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ movie: { Poster, Title, Year, Released, imdbRating } }) => {
  return (
    <div className='movie__card'>
      {Poster && <img src={Poster} alt={Title} />}
      <h3>{Title}</h3>
      {Year && <p>Year: {Year}</p>}
      {imdbRating && <h6>Ratting: {imdbRating}</h6>}
      {Released && <p>Year: {Released}</p>}
    </div>
  );
};

export default MovieCard;
