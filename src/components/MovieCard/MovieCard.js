import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ movie: { Poster, Title, Year } }) => {
  return (
    <div className='movie__card'>
      <img src={Poster} alt={Title} />
      <h3>{Title}</h3>
      <p>Year: {Year}</p>
    </div>
  );
};

export default MovieCard;
