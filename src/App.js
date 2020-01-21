import React, { useState } from 'react';
import './App.css';
import Numbers from './components/Numbers';
import Stats from './components/Stats';

const App = () => {
  const [nums, setNums] = useState([]);
  const createNum = () => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    setNums([...nums, randomNum]);
  };

  return (
    <div id="main">
      <h2 id="title">the numbers game</h2>
      <p>INSTRUCTIONS: click the conspicuously labeled button below</p>
      <button onClick={createNum}>
        <b>GENERATE NUMBER</b>
      </button>

      <Numbers nums={nums} />
      <Stats nums={nums} />
    </div>
  );
};

export default App;
