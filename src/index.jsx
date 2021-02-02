import React from 'react';
import ReactDOM from 'react-dom';
import ColorCase from 'components/Colors';

const App = () => (
  <div>
    <h1>Click on one of the colors!</h1>
    <ColorCase />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
