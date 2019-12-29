import React from 'react';
import avatar from '../images/avatar.jpg';


window.addEventListener('load', () => {
  const app = document.getElementById('App');
  const header = document.getElementById('Header');
  const photo = header.getElementsByTagName('img')[0];

  let photoWidth = photo.offsetWidth;
  let headerHeight = header.offsetHeight;
  header.style.width = `${app.clientWidth}px`;

  app.addEventListener('scroll', () => {
    if (app.offsetWidth > 500) {
      const photoDim = Math.max(70, photoWidth - app.scrollTop);
      photo.style.width = `${photoDim}px`;
      photo.style.height = `${photoDim}px`;
      photo.style.bottom = `${-photoDim / 2}px`;
    }
    header.style.height = `${Math.max(60, headerHeight - app.scrollTop)}px`;
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
    <img src={avatar} alt="avatar" />
    <h1 className="brand">FR</h1>
    <ul className="nav">
      <li><a href="#Vitrine" onClick={handleClick}>About</a></li>
      <li><a href="#Projects" onClick={handleClick}>Projects</a></li>
      <li><a href="#Contact" onClick={handleClick}>Contact</a></li>
    </ul>
  </header>
);

export default Header;
