/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import './ex4.css';
import Superhero from './Superhero';

// eslint-disable-next-line import/prefer-default-export
const ExerciseFourView = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [gender, setGender] = useState('Male');

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  // const toggleGender = () => {
  //   // gender === 'Male' ? setGender('Female') : setGender('Male');
  // };

  return (
    <div className="container">
      {superheroes.map((hero) => (
        hero.appearance.gender === gender
        && (
          <Superhero
            key={hero.id}
            name={hero.name}
            img={hero.images.sm}
            team={hero.connections.groupAffiliation.split(';').join(',').split(',')[0]}
          />
        )
      ))}
      <div className="button">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => (gender === 'Male' ? setGender('Female') : setGender('Male'))}
          />
          <span className="slider round" />
        </label>
      </div>
    </div>
  );
};

export default ExerciseFourView;
