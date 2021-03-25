import React from 'react';
import './ex4.css';

const Superhero = (props) => {
  const { name, img, team } = props;
  return (
    <div className="card">
      <h4>{name}</h4>
      <img src={img} alt={name} />
      <p>{team}</p>
    </div>
  );
};

export default Superhero;
