import React from 'react';
import './Button.css'

const Button = ({ vieillir }) => {
  return (
    <div>
      <button onClick={vieillir}>
         vieillir
      </button>
    </div>
  );
};

export default Button;