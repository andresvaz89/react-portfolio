import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials" target="_blank">
      <a href="https://www.linkedin.com/in/andres-vazquez-martin/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/andresvaz89">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
