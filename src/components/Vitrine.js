import React from 'react';

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
    <div className="about">
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
    </div>
    <div className="separator" />
    <div className="skills">
      <div className="card">
        <h2 className="title">
          Skills
        </h2>
        <ul>
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </div>
  </section>
);

export default Vitrine;
