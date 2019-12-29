import React from 'react';

const scroll = (app, height) => {
  const start = performance.now();
  const timing = (t) => (t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / 1000;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);

    app.scrollTop = height * progress;

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
    <h1 className="brand">FR</h1>
    <ul className="nav">
      <li><a href="#Vitrine" onClick={handleClick}>About</a></li>
      <li><a href="#Projects" onClick={handleClick}>Projects</a></li>
      <li><a href="#Contact" onClick={handleClick}>Contact</a></li>
    </ul>
  </header>
);

export default Header;
