import React from 'react';
import avatar from '../images/avatar.jpg';
import Angel from '../images/angel.svg';
import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import Connect from '../images/connect.svg';
import Facebook from '../images/facebook.svg';
import LinkedIn from '../images/linkedin.svg';


window.addEventListener('load', () => {
  const app = document.getElementById('App');
  const photo = document.getElementById('avatar');
  const header = document.getElementById('Header');
  const vitrine = document.getElementById('Vitrine');

  let photoWidth = photo.offsetWidth;
  let headerHeight = header.offsetHeight;
  header.style.width = `${app.clientWidth}px`;

  app.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      if (app.offsetWidth > 500) {
        const photoDim = Math.max(70, photoWidth - app.scrollTop);
        photo.style.width = `${photoDim}px`;
        photo.style.height = `${photoDim}px`;
        photo.style.bottom = `${-photoDim / 2}px`;
      }
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
    if (app.offsetWidth > 500) {
      photo.style.width = '15vw';
      photo.style.height = '15vw';
      photo.style.bottom = `${-15 / 2}vw`;
      photoWidth = photo.offsetWidth;
    }
    header.style.height = '12vw';
    headerHeight = header.offsetHeight;
    header.style.width = `${app.clientWidth}px`;
    vitrine.style.marginTop = header.style.height;
  });
});

const scroll = (app, height) => {
  const start = performance.now();
  const { scrollTop } = app;
  const distance = height - scrollTop - 60;
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
  const app = document.getElementById('App');
  scroll(app, target.offsetTop);
};

const Header = () => (
  <header id="Header">
    <div id="avatar">
      <img src={avatar} alt="avatar" />
      <ul>
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
          <Connect />
        </li>
      </ul>
    </div>
    <h1 className="brand">FR</h1>
    <ul className="nav">
      <li><a href="#Vitrine" onClick={handleClick}>About</a></li>
      <li><a href="#Projects" onClick={handleClick}>Projects</a></li>
      <li><a href="#Contact" onClick={handleClick}>Contact</a></li>
    </ul>
  </header>
);

export default Header;
