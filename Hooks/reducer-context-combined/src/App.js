import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import UseReducerA from './components/UseReducerA';
import UseReducerB from './components/UseReducerB';
import UseReducerC from './components/UseReducerC';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1 
    case 'reset':
      return initialState
    default: 
      return state    
  }
}


function App() {

  const [count, dispatch] = useReducer(reducer,initialState)
  return (
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
           <div className="App">
            <h1>Count - {count}</h1>
            <UseReducerA/>
            <UseReducerB/>
            <UseReducerC/>
            </div>
      </CountContext.Provider>
    );
  }

export default App;
