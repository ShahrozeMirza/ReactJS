import React, { Component } from 'react'

class ClickCounter2 extends Component {

  render() {
    //We destructure the props passed to the 'ClickCounter2' component as props in the App.js file. The 'ClickCounter2' component makes use of the passed in props to render the actual UI. When you click on the button and call the increment call method or try to display the count value it is pretty much what the CounterRenderProps has provided.
    const {count, incrementCount} = this.props
    return (
      <div>
          <button onClick={incrementCount}>Clicked {count} Times</button>
      </div>
    )
  }
}

export default ClickCounter2
