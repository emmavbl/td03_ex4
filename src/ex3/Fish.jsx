import React from 'react';

const Fish = (props) => {
  // super(props);
  let fish = '><';
  for (let i = 0; i < props.size; i += 1) {
    fish += '=';
  }
  fish += '°>';

  return (
    <main>
      <p>{fish}</p>
      {/* <button onClick={(e) => { props.size-- }}>-</button>
      <button onClick={(e) => { props.size++ }}>+</button> */}
    </main>
  );
};

export default Fish;
