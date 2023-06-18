import React from 'react';
import './Portfolio.css';
import imgProject1 from '../assets/hello pilot.png';
import imgProject2 from '../assets/WhoWon.jpg';
import imgProject3 from '../assets/todo-list.png';

const portfolioItemsData = [
  {
    id: 1,
    image: imgProject1,
    title: 'Hello Pilot',
    github: 'https://github.com/andresvaz89/ironhack-gameproject1',
    demo: 'https://hellopilot.netlify.app/'
  },
  {
    id: 2,
    image: imgProject2,
    title: 'Who won',
    github: 'https://github.com/andresvaz89/whowon',
    demo: 'https://who-won.onrender.com/'
  },
  {
    id: 3,
    image: imgProject3,
    title: 'Todo list in React',
    github: 'https://github.com/andresvaz89/react-todo-list',
    demo: 'https://react-todo-list-andres.netlify.app/'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItemsData.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="hello pilot game" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
