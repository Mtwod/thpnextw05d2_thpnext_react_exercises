import React from 'react';
import './index.scss';


const ColorCase = () => {
  const [color, setColor] = React.useState('none');

  const redColor = () => {
    setColor('red');
  };

  const blueColor = () => {
    setColor('blue');
  };

  const yellowColor = () => {
    setColor('yellow');
  };
  
  const greenColor = () => {
    setColor('green');
  };

  const colors = ['red', 'blue', 'yellow', 'green'];
  const [red, blue, yellow, green] = colors;

  return (
    <div>
      <div  className="ColorCase">
        <div className={`ColorCase__${red}`} onClick={redColor}></div>
        <div className={`ColorCase__${blue}`} onClick={blueColor}></div>
        <div className={`ColorCase__${yellow}`} onClick={yellowColor}></div>
        <div className={`ColorCase__${green}`} onClick={greenColor}></div>
      </div>
      <p classNamae={"ColorCase__text"}>The last one you clicked on is {color}</p>
    </div>
  );
};

export default ColorCase;
