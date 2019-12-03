import React from 'react';
import PropTypes from 'prop-types';
import tada from '../images/Tada.png';
import weather from '../images/Weather.png';
import tictactoe from '../images/TicTacToe.png';
import battleship from '../images/Battleship.png';
import earthdiary from '../images/Earthdiary.png';

const list = [
  {
    id: 1,
    img: battleship,
    url: 'https://fabienneibaf.github.io/Battleship/',
  },
  {
    id: 2,
    img: earthdiary,
    url: 'https://earthdiary.herokuapp.com/',
  },
  {
    id: 3,
    img: tada,
    url: 'https://fabienneibaf.github.io/TodoList/',
  },
  {
    id: 4,
    img: tictactoe,
    url: 'https://fabienneibaf.github.io/TicTacToe/',
  },
  {
    id: 5,
    img: weather,
    url: 'https://fabienneibaf.github.io/Weather-App/',
  },
];

const Item = ({ item }) => (
  <li className="item">
    <a href={item.url}>
      <img src={item.img} alt="" />
    </a>
  </li>
);

const Projects = () => (
  <section id="Projects">
    <h2 className="title">
      Here are the projects I&apos;ve been working on so far
    </h2>
    <ul>
      {list.map((item) => <Item key={item.id} item={item} />)}
    </ul>
  </section>
);

Item.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Projects;
