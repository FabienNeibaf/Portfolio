import React from 'react';
import avatar from '../images/avatar.jpg';

const Vitrine = () => (
  <section id="Vitrine">
    <h2 className="title">
      Software engineer with a strong analytical background
      <br />
      Full-stack web developer
    </h2>
    <p>
      I love to solve problems and challenge myself
    </p>
    <img src={avatar} alt="avatar" />
  </section>
);

export default Vitrine;
