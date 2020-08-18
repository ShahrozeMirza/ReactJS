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
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import RenderPropUser from './components/RenderPropUser';
import CounterRenderProp from './components/CounterRenderProp';
import TopLevel from './components/TopLevel';
import { UserProvider } from './components/UserContext';


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
      {/* <ErrorBoundary>
        <HeroErrBound heroName="Superman"></HeroErrBound>
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroErrBound heroName="Joker"></HeroErrBound>
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroErrBound heroName="Batman"></HeroErrBound>
      </ErrorBoundary> */}

      {/* Higher Order Components Start  */}
       
       {/* These name props will be passed to HOC not the OriginalComponents/WrappedComponents i.e 'ClickCounter' and 'HoverCounter'. They will be undefined in the orginal components. */}
      {/* <ClickCounter name="Shahroze"/> */}
      {/* <HoverCounter name="Shahroze"/> */}

      {/* Higher Order Components End  */}

      {/* Render Props Start  */}

      {/* <HoverCounter2/>
      <ClickCounter2/>
      <RenderPropUser render={(isLoggedIn) => isLoggedIn ? "Shahroze" : "Guest" }/> */}

      {/* Render Props takes a function and we pass the stats and logical methods to that function as parameters/arguments and then in the arrow function we  pass those components which will use the common functionality. To the components which will use the the common functionality we will pass the same parameters (passed as arguments to the render prop i.e 'count' and 'incrementCount') as props. Here the render props are 'ClickCounter2' and 'HoverCounter2'. It is also important to know that the prop need not to be called as render. It could be called anything you wish to but render is kind of the convention. */}
      
      {/* <CounterRenderProp render={(count,incrementCount) => ( 
           <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      />

        <CounterRenderProp render={(count, incrementCount) => (<HoverCounter2 count={count} 
        incrementCount={incrementCount} />
      )}
       /> */}

       {/* There is a variation of the render props pattern which doesn't even make use of the render prop. Instead the children prop is used. We have to make two simple changes. Instead of the render prop we pass in the function in between the CounterRenderProp(i.e any component which contains the common functionality) components opening and closing tags. Remember anything between the components opening and closing tags will be passed as the children props which, is then accessed to render the UI.*/}

       {/* <CounterRenderProp>
         {(count,incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
         )}
       </CounterRenderProp>

       <CounterRenderProp>
         {(count,incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
         )}
       </CounterRenderProp> */}

       {/* Render Props End  */}

       {/* Step 2. Wrap the top level component with the user provider  component and pass the value there in the value attribute in the Provider Component. If there is no Provider Component the default value will be used and displayed, The default value is set in the React.createContext() method.  */}

       <UserProvider value="Shahroze Mirza">
          <TopLevel/>
       </UserProvider>
      
    </div>
  );
}

export default App;
