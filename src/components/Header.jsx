import React, { useState } from 'react';

import './Header.css';
import CTA from './CTA';
import withoutGlasses from '../assets/profile picture.jfif';
import HeaderSocials from './HeaderSocials';

import withGlasses from '../assets/gafas.jfif';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const glassesOrNot = clicked ? withGlasses : withoutGlasses;
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Andrés Vázquez</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <img
          className="me"
          src={glassesOrNot}
          alt="Andrés"
          style={{ width: 300, height: 300 }}
          onClick={handleClick}
        />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
