import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#home"></a>Home
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio"></a>Portfolio
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy;andresvaz.dev All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
