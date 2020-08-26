import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterCorrect from './components/HookCounterCorrect';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterCorrect/> */}
      {/* <UseStateObject/> */}
      <UseStateArray/>
    </div>
  );
}

export default App;
