import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UseMemoCounter from './components/UseMemoCounter';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      <UseMemoCounter/>
    </div>
  );
}

export default App;