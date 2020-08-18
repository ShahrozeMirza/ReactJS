import React, { Component } from 'react'
import InnerMost from './InnerMost'
import UserContext from './UserContext'
//Inner Level Component for context. There is another method for consuming the value from the context.
class InnerLevel extends Component {

  //If your app supports the public class field syntax then the ClassName.contextType(InnerLevel.contextType in this case) can be replaced with 'static contextType = CreatedContext' (UserContext in this case)

  // static contextType = UserContext

  render() {
    return (
      <div>
        {this.context} from contextType Property
        <InnerMost/>
      </div>
    )
  }
}

//This is the second method other than the ContextComponent for consuming context value. Attach the contextType property with the class component which will consume the value of context(i.e InnerLevel in this case) and assign the CreatedContext (i.e UserContext in this case) to it. The context will now be available in the render() method if this class as this.context.


InnerLevel.contextType = UserContext

//There are two limitations of contextType. First is that it can only be used with class components. Second is that you can only subscribe/consume one context value with contextType property. If you want to consume mutltiple value from a context, use <ConsumerComponent></<ConsumerComponent> to consume values.

export default InnerLevel

