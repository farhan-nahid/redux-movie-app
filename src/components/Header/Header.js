import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <nav>
      <ul className='container'>
        <li>
          <NavLink to='/'>Redux Movie App</NavLink>
        </li>
        <li>
          <img src='https://i.ibb.co/7CzR0Dg/users.jpg' alt='logo' />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
