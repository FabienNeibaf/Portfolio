import React from 'react';
import avatar from '../images/avatar.jpg';

const skills = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'React',
  'Angular',
  'Java',
  'JavaFX',
  'Spring',
  'Androïd',
  'Ruby on Rails',
  'SQLite',
  'PostgreSQL',
  'MongoDB',
  'PHP',
  'Laravel',
  'Statistics',
  'Data visualization',
  'Data Collect',
  'Python',
  'R',
  'Windows',
  'Linux',
  'Parser',
];

const Vitrine = () => (
  <section id="Vitrine">
    <img src={avatar} alt="avatar" />
    <main className="about">
      <div className="card">
        <h2 className="title">
          About
        </h2>
        <p className="name">
          &gt; Fabien RAKOTOMAMPIANDRA
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
          Pursued a legal study and have a Bachelor in Public Law.
        </p>
      </div>
      <div className="separator" />
      <div className="card">
        <h2 className="title">
          Skills
        </h2>
        <div className="skills">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>
    </main>
  </section>
);

export default Vitrine;
