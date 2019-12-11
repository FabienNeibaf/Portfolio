import React from 'react';
import PropTypes from 'prop-types';
import tada from '../images/Tada.png';
import Github from '../images/github.svg';
import weather from '../images/Weather.png';
import dashboard from '../images/Dashboard.png';
import tictactoe from '../images/TicTacToe.png';
import battleship from '../images/Battleship.png';
import earthdiary from '../images/Earthdiary.png';

const list = [
  {
    id: 1,
    img: battleship,
    demo: 'https://fabienneibaf.github.io/Battleship/',
    github: 'https://github.com/FabienNeibaf/Battleship',
  },
  {
    id: 2,
    img: earthdiary,
    demo: 'https://earthdiary.herokuapp.com/',
    github: 'https://github.com/maelfosso/microverse_ror_final_project',
  },
  {
    id: 3,
    img: tada,
    demo: 'https://fabienneibaf.github.io/TodoList/',
    github: 'https://github.com/FabienNeibaf/TodoList',
  },
  {
    id: 4,
    img: tictactoe,
    demo: 'https://fabienneibaf.github.io/TicTacToe/',
    github: 'https://github.com/FabienNeibaf/TicTacToe',
  },
  {
    id: 5,
    img: weather,
    demo: 'https://fabienneibaf.github.io/Weather-App/',
    github: 'https://github.com/FabienNeibaf/Weather-App',
  },
  {
    id: 6,
    img: dashboard,
    demo: 'https://fabienneibaf.github.io/Dashboard/',
    github: 'https://github.com/FabienNeibaf/Dashboard',
  },
];

const Item = ({ item }) => (
  <li className="item">
    <img src={item.img} alt="" />
    <div className="external">
      <a href={item.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
      <a href={item.github} target="_blank" rel="noopener noreferrer">
        <Github />
        Source code
      </a>
    </div>
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
    img: PropTypes.string,
    demo: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default Projects;
