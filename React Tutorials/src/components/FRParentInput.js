import React, { Component } from 'react'
import FRChildInput from './FRChildInput'

class FRParentInput extends Component {

  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
    
  }

  focusInputHandler = () =>
  {
      this.inputRef.current.focus()
  }
  

  render() {
    return (
      <div>
         <FRChildInput type="text" ref={this.inputRef} />
         <button onClick={this.focusInputHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput
