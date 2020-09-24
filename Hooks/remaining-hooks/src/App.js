import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UseMemoCounter from './components/UseMemoCounter';
import InputRef from './components/InputRef';
import UseRefInterval from './components/UseRefInterval';
import ParentRef from './components/ParentRef';
import DocTitleOne from './customHooks/DocTitleOne';
import DocTitleTwo from './customHooks/DocTitleTwo';
import CounterOne from "./customHooks/customCounterHook/CounterOne";
import CounterTwo from "./customHooks/customCounterHook/CounterTwo";
import UserForm from './customHooks/customInput/UserForm';

function App() {
  
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <UseMemoCounter/> */}
      {/* <InputRef/> */}
      {/*<UseRefInterval/>*/}
      {/*<ParentRef/>*/}
      {/*<DocTitleOne/>*/}
      {/*<DocTitleTwo/>*/}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      <UserForm/>
    </div>
  );
}

export default App;