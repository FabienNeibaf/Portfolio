import React from 'react';
import PropTypes from 'prop-types';
import tada from '../images/Tada.png';
import Github from '../images/github.svg';
import weather from '../images/Weather.png';
import calculata from '../images/Calculata.png';
import dashboard from '../images/Dashboard.png';
import tictactoe from '../images/TicTacToe.png';
import battleship from '../images/Battleship.png';
import earthdiary from '../images/Earthdiary.png';

const list = [
  {
    id: 0,
    img: calculata,
    demo: 'https://calculata.herokuapp.com/',
    github: 'https://github.com/FabienNeibaf/Calculator',
    description: 'This parser-based calculator uses Javascript to evaluate any type of mathematically valid expresion, from simple arithmetic to algebraic expressions.',
    technologies: ['Javascript', 'HTML5', 'CSS3', 'Parser'],
  },
  {
    id: 1,
    img: battleship,
    demo: 'https://fabienneibaf.github.io/Battleship/',
    github: 'https://github.com/FabienNeibaf/Battleship',
    description: "This program mimics the original battleship boardgame, allowing the user to place battleships of different sizes on a playing field and then play against the computer until one side has sunken the other's ships.",
    technologies: ['Javascript', 'HTML5', 'CSS3'],
  },
  {
    id: 2,
    img: earthdiary,
    demo: 'https://earthdiary.herokuapp.com/',
    github: 'https://github.com/maelfosso/microverse_ror_final_project',
    description: 'A Facebook-like social network. Users can create, like, and comment on posts. Users can also add/remove friends, and receive notifications for updates.',
    technologies: ['Javascript', 'HTML5', 'CSS3', 'Ruby on Rails', 'JQuery', 'PostgreSQL'],
  },
  {
    id: 3,
    img: tada,
    demo: 'https://fabienneibaf.github.io/TodoList/',
    github: 'https://github.com/FabienNeibaf/TodoList',
    description: 'A Todo list application that allows users to manage multiple tasks and group them into projects and by priorities.',
    technologies: ['Javascript', 'HTML5', 'CSS3'],
  },
  {
    id: 4,
    img: tictactoe,
    demo: 'https://fabienneibaf.github.io/TicTacToe/',
    github: 'https://github.com/FabienNeibaf/TicTacToe',
    description: 'This is a strategic game, the goal of which is to be the first to align three markers. Players take turn in positioning their respective marker.',
    technologies: ['Javascript', 'HTML5', 'CSS3'],
  },
  {
    id: 5,
    img: weather,
    demo: 'https://fabienneibaf.github.io/Weather-App/',
    github: 'https://github.com/FabienNeibaf/Weather-App',
    description: 'This weather app allows you to get the forecast of a location of your choice by typing it in the search box. By default, the app detects your current location, and if available, use it to get the weather information.',
    technologies: ['Javascript', 'HTML5', 'CSS3', 'REST/API'],
  },
  {
    id: 6,
    img: dashboard,
    demo: 'https://fabienneibaf.github.io/Dashboard/',
    github: 'https://github.com/FabienNeibaf/Dashboard',
    description: 'This is a concept design for an updated dashboard for Microverse, a remote software development school. The design groups curricula together, allows users to easily track their progress, and clearly displays a daily schedule.',
    technologies: ['Javascript', 'HTML5', 'CSS3'],
  },
];

const Item = ({ item }) => (
  <li className="item">
    {(item.id % 2 !== 0) ? <img src={item.img} alt="" /> : ''}
    {(item.id % 2 !== 0) ? <div className="separator" /> : ''}
    <div className="info">
      <p>{item.description}</p>
      <div className="tech">
        <h3>Technologies</h3>
        <ul>{item.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      </div>
      <div className="external">
        <a href={item.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
        <a href={item.github} target="_blank" rel="noopener noreferrer">
          <Github />
          Source code
        </a>
      </div>
    </div>
    {(item.id % 2 === 0) ? <div className="separator" /> : ''}
    {(item.id % 2 === 0) ? <img src={item.img} alt="" /> : ''}
  </li>
);

const Projects = () => (
  <section id="Projects">
    <h2 className="title">
      My Recent Work
    </h2>
    <ul>
      {list.map((item) => <Item key={item.id} item={item} />)}
    </ul>
  </section>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    demo: PropTypes.string,
    github: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Projects;
