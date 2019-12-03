import React from 'react';
import Angel from '../images/angel.svg';
import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import Facebook from '../images/facebook.svg';
import LinkedIn from '../images/linkedin.svg';
import Credit from './Credit';

const Footer = () => (
  <footer id="Footer">
    <ul>
      <li>
        <a href="https://twitter.com/Neibaflintone">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://angel.co/fabien-rakotomampiandra">
          <Angel />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/fabien-rakotomampiandra-96567b17b/">
          <LinkedIn />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/fabien.mampiandra.7">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://github.com/FabienNeibaf">
          <Github />
        </a>
      </li>
    </ul>
    <p className="legal">Copyright &copy; Fabien RAKOTOMAMPIANDRA</p>
    <Credit />
  </footer>
);

export default Footer;
