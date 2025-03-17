import React from 'react';

const button = ({ nombre, funcion }) => {
  return (
    <button onClick={funcion}>
      {nombre}
    </button>
  );
};
export default button;