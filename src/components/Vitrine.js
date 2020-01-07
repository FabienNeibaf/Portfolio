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
          Software engineer with a strong analytical mindset and 3+ years of experience
          building desktop and web applications.
        </p>
        <p>
          Studied computer science, mathematics, and public law in college.
          <br />
          Have Bachelor&apos;s degrees in Mathematics and Computer Science and in Public Law.
          <br />
          Completed all of the theoretical courses for the Master&apos;s in Mathematics and
          Computer Science.
        </p>
        <p>
          Love to solve problems and challenge myself.
        </p>
        <p>
          Currently looking for my next developer job -- feel free to contact me!
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
