import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTheme } from '../store';

import sun from '../images/sun2.png';
import moon from '../images/moon.png';
import Angel from '../images/angel.svg';
import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import Connect from '../images/connect.svg';
import Facebook from '../images/facebook.svg';
import LinkedIn from '../images/linkedin.svg';

const run = (element) => {
  element.classList.add('run');
  return setTimeout(() => {
    element.classList.remove('run');
  }, 5000);
};

window.addEventListener('load', () => {
  const app = document.getElementById('App');
  const header = document.getElementById('Header');
  const vitrine = document.getElementById('Vitrine');
  const toggler = document.querySelector('.connect .toggle');
  const animate = toggler.querySelector('.animate');

  let timeout;
  let headerHeight = header.offsetHeight;
  header.style.width = `${app.clientWidth}px`;

  timeout = run(animate);

  toggler.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    timeout = run(animate);
  });

  app.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      const headerDim = Math.max(60, headerHeight - app.scrollTop);
      header.style.height = `${headerDim}px`;
      vitrine.style.marginTop = header.style.height;
    });
  });

  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    app.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        const position = item.getBoundingClientRect();
        const center = item.offsetHeight / 2;

        if (position.top + center >= header.offsetHeight
          && position.bottom - center <= window.innerHeight) {
          if (!item.classList.contains('show')) item.classList.add('show');
        } else if (item.classList.contains('show')) item.classList.remove('show');
      });
    });
  });

  window.addEventListener('resize', () => {
    header.style.height = '12vw';
    headerHeight = header.offsetHeight;
    header.style.width = `${app.clientWidth}px`;
    vitrine.style.marginTop = header.style.height;
  });
});

const scroll = (height) => {
  const app = document.getElementById('App');
  const header = document.getElementById('Header');
  const start = performance.now();
  const { scrollTop } = app;
  const distance = height - scrollTop - header.offsetHeight;
  const timing = (t) => (t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / 1000;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);

    app.scrollTop = scrollTop + distance * progress;
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const handleClick = (e) => {
  e.preventDefault();
  const target = document.getElementById(e.target.href.match(/.+#(.+)/)[1]);
  scroll(target.offsetTop);
};

const mapStateToProps = (state) => ({ theme: state });

const mapDispatchToProps = (dispatch) => ({
  toggleThemeHandler: (theme) => dispatch(toggleTheme(theme)),
});

const Header = ({ theme, toggleThemeHandler }) => (
  <header id="Header" className={theme}>
    <h1 className="brand">FR</h1>
    <ul className="nav">
      <div className="jump">
        <button type="button">Menu</button>
        <div>
          <li><a href="#Vitrine" onClick={handleClick}>About</a></li>
          <li><a href="#Projects" onClick={handleClick}>Projects</a></li>
          <li><a href="#Contact" onClick={handleClick}>Contact</a></li>
        </div>
      </div>
      <li className="theme">
        <button type="button" onClick={() => toggleThemeHandler(theme)}>
          <img src={theme === 'dark' ? sun : moon} alt="" />
        </button>
      </li>
    </ul>
    <ul className="connect">
      <li>
        <a href="https://twitter.com/Neibaflintone" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://angel.co/fabien-rakotomampiandra" target="_blank" rel="noopener noreferrer">
          <Angel />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/fabien-rakotomampiandra-96567b17b/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/fabien.mampiandra.7" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://github.com/FabienNeibaf" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </li>
      <li className="toggle">
        <div className="animate"><Connect /></div>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleThemeHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
