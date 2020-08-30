import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterCorrect from './components/HookCounterCorrect';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import UseEffectA from './components/UseEffectA';
import UseEffectConditionally from './components/UseEffectConditionally'
import UseEffectOnce from './components/UseEffectOnce';
import UseEffectCleanup from './components/UseEffectCleanup';
import CorrectDependecy from './components/CorrectDependency';
import DataFetching from './components/DataFetching';
import FetchDataIndividual from './components/FetchDataIndividual';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterCorrect/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      {/* <UseEffectA/> */}
      {/* <UseEffectConditionally/> */}
       {/* <UseEffectOnce/> */}
       {/* <UseEffectCleanup/> */}
      {/* <CorrectDependecy/> */}
      {/* <DataFetching/> */}
      <FetchDataIndividual/>
    </div>
  );
}

export default App;
