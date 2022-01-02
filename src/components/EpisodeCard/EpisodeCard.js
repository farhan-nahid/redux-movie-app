import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EpisodeCard.scss';

const EpisodeCard = ({ episode: { Title, Released, imdbRating, imdbID } }) => {
  const navigate = useNavigate();

  return (
    <div className='episode__card' onClick={() => navigate(`/details/${imdbID}`)}>
      <h3>{Title}</h3>
      <h6>Ratting: {imdbRating}</h6>
      <p>Year: {Released}</p>
    </div>
  );
};

export default EpisodeCard;
