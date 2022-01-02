import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ movie: { Poster, Title, Year, Released, imdbRating, imdbID } }) => {
  const navigate = useNavigate();

  return (
    <div className='movie__card' onClick={() => navigate(`/details/${imdbID}`)}>
      {Poster && <img src={Poster} alt={Title} />}
      <h3>{Title}</h3>
      {Year && <p>Year: {Year}</p>}
      {imdbRating && <h6>Ratting: {imdbRating}</h6>}
      {Released && <p>Year: {Released}</p>}
    </div>
  );
};

export default MovieCard;
