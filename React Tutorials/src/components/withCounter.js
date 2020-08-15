import React from 'react'

//The Naming Conventions are not required to be exact like this, but these are the convetions which are mostly used.

//Higher Order Component (HOC) is a pattern where a function takes a component as an argument and returns a new function. The new function is also called enhanced component. In code it is like:

// New/Enhanced Compnent = HOC(OriginalComponent)
//The original component is referred as the WrappedComponent as it is the component which we want to enhance and which will be passed to the HOC as an argument to use the functionality or data addition from HOC.

//Here withCounter is the Function which will take WrappedComponent (original component) as its argument.

//Here the WrappedComponent will be the component which will be passed as an argument to withCounter function.
    //The New Component is the returned enhanced component which contains the common functionality that will be used in different components.
    //The NewComponent in naming convention has the same name as the function but in PascalCase. Here withCounter is the function and WithCounter is the NewComponent.
    
    //You can also pass parameters to HOC, then the function will receive 2 params i.e the WrappedComponent and the 2nd parameter which in this case is the incrementCount
    
    const withCounter = (WrappedComponent, incrementCount) => {

    //We are extending the NewComponent with 'React.Component' not with 'Component'.
    class WithCounter extends React.Component{

        constructor(props){
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {

            //incrementCount will be the second parameter for HOC in case if we want to increment different value in 'ClickCounter' and 'HoverCounter'.
            this.setState(prevState => {
                return{
                    count: prevState.count + incrementCount
                }
            })
        }
        render(){
            //The Enhancements like functionality, states and methods are passed as props to the WrappedComponent(OriginalComponent)

            //Other than the two props defined in the HOC NewComponent, all the remaining specified props will be passed to the WrappedComponent using the Spread Operator. Because the props will be received here in HOC not in the OriginalComponents. They will be undefined there.
            return(
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
            )
        }
    }
    //The NewComponent is returned. Here the NewComponent is WithCounter
    return WithCounter
}

export default withCounter