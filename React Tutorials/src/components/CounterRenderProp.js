import React, { Component } from 'react'

class CounterRenderProp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementCount = () =>{
      this.setState(prevState => {
          return{
              count: prevState.count + 1
          }
      })
  }
    
  render() {

    //Here the counter component is telling the JSX that take the count state and incrementCount method and render whatever you want and I will take care of the logic. We passed the states and logical methods in the JSX to 'this.props.render as parameters.' This component does not render anything on its own. It is simply going to render whatever is passed as the render prop.
    return (
      <div>
        {/* {this.props.render(this.state.count, this.incrementCount)} */}

        {/* If we use the render prop without the render prop, we use the children prop */}
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default CounterRenderProp
