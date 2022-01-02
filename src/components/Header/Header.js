import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadMovieAsync } from '../../features/movies/moviesSlice';
import './Header.scss';
import icon from './icon.png';

const Header = () => {
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(loadMovieAsync(e.target.movie.value));
    e.target.reset();
  };

  return (
    <nav>
      <ul className='container'>
        <li>
          <NavLink to='/'>Redux Movie App</NavLink>
        </li>
        <li>
          <form onSubmit={handelSubmit}>
            <input type='text' autoCapitalize='false' autoComplete='off' placeholder='Search for only Movies' name='movie' />
            <button type='submit'>
              <img src={icon} alt='icon' />
            </button>
          </form>
        </li>
        <li>
          <img src='https://i.ibb.co/7CzR0Dg/users.jpg' alt='logo' />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
