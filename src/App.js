import React, { useState } from 'react';

const App = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    if (name === 'color1') {
      setColor1(value);
    } else if (name === 'color2') {
      setColor2(value);
    }
    applyGradient(); 
  };

  const applyGradient = () => {
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  };

  return (
    <div>
    <h1> <strong>Background Generator</strong>  </h1>
      <input
        type="color"
        name="color1"
        className="color1"
        value={color1}
        onChange={handleColorChange}
      />
      <input
        type="color"
        name="color2"
        className="color2"
        value={color2}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default App;
