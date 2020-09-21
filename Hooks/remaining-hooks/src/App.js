import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UseMemoCounter from './components/UseMemoCounter';
import InputRef from './components/InputRef';
import UseRefInterval from './components/UseRefInterval';

function App() {
  
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <UseMemoCounter/> */}
      {/* <InputRef/> */}
      <UseRefInterval/>
    </div>
  );
}

export default App;