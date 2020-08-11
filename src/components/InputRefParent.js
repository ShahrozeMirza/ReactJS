import React, { Component } from 'react'
import InputRefChild from './InputRefChild'


class InputRefParent extends Component {
 
  constructor(props){
      super(props)

      this.parentComponentRef = React.createRef()
  }  

  focusInputHandler = () => {
      //With this Ref call the focusInput method in InputRefChild.js file which has the Ref for focusing input 
      this.parentComponentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <InputRefChild ref={this.parentComponentRef}/>
        <button onClick={this.focusInputHandler}>Focus Input</button>
      </div>
    )
  }
}

export default InputRefParent
