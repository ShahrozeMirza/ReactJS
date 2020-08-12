import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello, {PlainJS} from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter'
import FunctionParameter,{FunctionBody} from './components/DestFunCom'
import ClassDestructuring from './components/DestClassCom'
import FunctionClick from './components/FunctionClickEv'
import ClassClick from './components/ClassClickEv'
import BindEvent from './components/BindEvent'
import ParentComponent from './components/ParentComponent'
import UserGreet from './components/UserGreet'
import NameList from './components/NameList'
import Stylesheet,{ConditionalStyling} from './components/Stylesheet'
import Inline from './components/Inline'
import './regularStyleSheet.css'
import styles from './moduleStyleSheet.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import RefsOldDemo from './components/RefsOldDemo'
import InputRefParent from './components/InputRefParent'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import HeroErrBound from './components/HeroErrBound'
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Shahroze Mirza" heroName="Superman">
        <p>This is Props Child.</p>  
      </Greet>
      <Greet name="Raza Mirza" heroName="Batman">
        <button>Action</button> 
      </Greet>
      <Welcome name="Husnain" heroName="Thor" />
      <Welcome name="Abubakar" heroName="Iron Man"/>
      <Hello/>
      <PlainJS/>
      <Message/>
      <Counter/>
      <FunctionParameter name="Shahroze Mirza" heroName="Superman"/> 
      <FunctionBody name="Raza Mirza" heroName="Batman"/>
      <ClassDestructuring movie="Avengers" rating="8.1"/>
      <FunctionClick/>
      <ClassClick/>
      <BindEvent/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreet/> */}
      {/* <NameList/> */}
      {/* <Stylesheet/> */}
      {/* <ConditionalStyling fontSize={true}/> */}
      {/* <Inline/> */}
      {/* <h1 className='color'>This is Regular CSS styling</h1> */}
      {/* <h1 className={styles.color}>This is Module CSS styling</h1> */}
      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <RefsOldDemo/> */}
      {/* <InputRefParent/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      <ErrorBoundary>
        <HeroErrBound heroName="Superman"></HeroErrBound>
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroErrBound heroName="Joker"></HeroErrBound>
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroErrBound heroName="Batman"></HeroErrBound>
      </ErrorBoundary>
    </div>
  );
}

export default App;
