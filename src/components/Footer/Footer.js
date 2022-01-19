import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <small>Copyright &copy; {new Date().getFullYear()} all right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
