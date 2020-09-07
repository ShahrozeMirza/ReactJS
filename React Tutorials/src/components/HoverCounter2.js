import React, { Component } from 'react'

class HoverCounter2 extends Component {

  render() {
    //We destructure the props passed to the 'HoverCounter2' component as props in the App.js file. The 'HoverCounter2' component makes use of the passed in props to render the actual UI. When you hover over the h1 and call the increment call method or try to display the count value it is pretty much what the CounterRenderProps has provided.
    const {count,incrementCount} = this.props
    return (
      <div>
          <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
      </div>
    )
  }
}

export default HoverCounter2
