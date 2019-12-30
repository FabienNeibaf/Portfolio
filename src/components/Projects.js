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
    description: "It's a parser based calculator. You can type any mathematical valid expressions.",
    technologies: ['Javascript', 'HTML5', 'CSS3', 'Parser'],
  },
  {
    id: 1,
    img: battleship,
    demo: 'https://fabienneibaf.github.io/Battleship/',
    github: 'https://github.com/FabienNeibaf/Battleship',
    description: "It's a game where the player fight against the machine. The first who sinks all the opponent ships win the game.",
    technologies: ['Javascript', 'HTML5', 'CSS3'],
  },
  {
    id: 2,
    img: earthdiary,
    demo: 'https://earthdiary.herokuapp.com/',
    github: 'https://github.com/maelfosso/microverse_ror_final_project',
    description: 'A facebook like social network. User can create like and comment post. He can add/remove friend. And for any event he receives notifications.',
    technologies: ['Javascript', 'HTML5', 'CSS3', 'Ruby on Rails', 'JQuery', 'PostgreSQL'],
  },
  {
    id: 3,
    img: tada,
    demo: 'https://fabienneibaf.github.io/TodoList/',
    github: 'https://github.com/FabienNeibaf/TodoList',
    description: 'A todo list application. You can manage all your tasks and group them into projects and priority.',
    technologies: ['Javascript', 'HTML5', 'CSS3'],
  },
  {
    id: 4,
    img: tictactoe,
    demo: 'https://fabienneibaf.github.io/TicTacToe/',
    github: 'https://github.com/FabienNeibaf/TicTacToe',
    description: 'This is a strategic game which goal is to align the first tree marker. Players take turn in positionning their respective marker.',
    technologies: ['Javascript', 'HTML5', 'CSS3'],
  },
  {
    id: 5,
    img: weather,
    demo: 'https://fabienneibaf.github.io/Weather-App/',
    github: 'https://github.com/FabienNeibaf/Weather-App',
    description: 'Get the forecast for a location of your choice buy searching it through the search box. By default it looks up your location and if available use it to deliver your current forecast.',
    technologies: ['Javascript', 'HTML5', 'CSS3', 'REST/API'],
  },
  {
    id: 6,
    img: dashboard,
    demo: 'https://fabienneibaf.github.io/Dashboard/',
    github: 'https://github.com/FabienNeibaf/Dashboard',
    description: "It's a concept design of a dashboard for Microverse,inc (remote school)",
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
