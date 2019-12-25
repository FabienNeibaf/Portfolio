import React from 'react';
import avatar from '../images/avatar.jpg';

const Vitrine = () => (
  <section id="Vitrine">
    <img src={avatar} alt="avatar" />
    <main className="about">
      <div className="card">
        <h2 className="title">
          About
        </h2>
        <p className="name">
          > Fabien RAKOTOMAMPIANDRA
        </p>
        <p>
          Full-stack web developer with a strong analytical background and 03 years of experience
          building desktop and web applications.
        </p>
        <p>
          Graduated in Mathematics and Computer Science.
        </p>
        <p>
          Love to solve problems and challenge himself.
        </p>
        <p>
          Pursued a legal study and have a Bachelor in public administration.
        </p>
      </div>
      <div className="separator" />
      <div className="card">
        <h2 className="title">
          Skills
        </h2>
        <div className="skills">
          <span>JavaScript</span>
          <span>Java</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Ruby on Rails</span>
          <span>React</span>
          <span>SQLite</span>
          <span>PostgreSQL</span>
          <span>Spring</span>
          <span>Laravel</span>
          <span>Angular</span>
          <span>MongoDB</span>
          <span>Statistics</span>
          <span>R</span>
          <span>Python</span>
          <span>Parser</span>
          <span>JavaFX</span>
          <span>Androïd</span>
          <span>Data visualization</span>
          <span>Data Collect</span>
          <span>Linux</span>
          <span>Windows</span>
        </div>
      </div>
    </main>
  </section>
);

export default Vitrine;
