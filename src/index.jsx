import React from 'react';
import ReactDOM from 'react-dom';
import ColorCase from 'components/Colors';
import Counter from 'components/Counter';

const App = () => (
  <div>
    <h1>Exercises with React!</h1>
    <h2>Click on one of the colors and it will display the name of the color you clicked, much wow!</h2>
    <ColorCase />
    <h2>Click on a button :)</h2>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
