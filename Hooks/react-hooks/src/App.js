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
import ComponentC from './components/ComponentC';
import UseReducerCounter from './components/UseReducerCounter';
import UseReducerCounterObj from './components/UseReducerCounterObj';
import UseReducerMultiple from './components/UseReducerMutiple';
import DataFetchUseState from './components/DataFetchUseState';


//for useContext Hook Tutorial start
//1. Create and export the text.
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
//for useContext Hook Tutorial end

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
      {/* <FetchDataIndividual/> */}
      
      {/* for useContext Hook Tutorial start */}

      {/* Provide this context with a value and the provider must wrap the children for the value to be available in the children */}
{/* 
      <UserContext.Provider value={'Vishwas'}>
         <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC/>
         </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* for useContext Hook Tutorial end */}
     {/* <UseReducerCounter/> */}
     {/* <UseReducerCounterObj/> */}
     {/* <UseReducerMultiple/> */}

     <DataFetchUseState/>

    </div>
    

    
  );
}

export default App;
