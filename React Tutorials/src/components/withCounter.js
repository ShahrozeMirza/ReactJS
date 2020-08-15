import React from 'react'
//Higher Order Component (HOC) is a pattern where a function takes a component as an argument and returns a new function. The new function is also called enhanced component. In code it is like:

// New/Enhanced Compnent = HOC(OriginalComponent)
//The original component is referred as the WrappedComponent as it is the component which we want to enhance and which will be passed to the HOC as an argument to use the functionality or data addition from HOC.

//Here withCounter is the Function which will take WrappedComponent (original component) as its argument.

//Here the WrappedComponent will be the component which will be passed as an argument to withCounter function.
    //The New Component is the returned enhanced component which contains the common functionality that will be used in different components.
    //The NewComponent in naming convention has the same name as the function but in PascalCase. Here withCounter is the function and WithCounter is the NewComponent.
    
    const withCounter = WrappedComponent => {
    class WithCounter extends React.Component{

        constructor(props){
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return{
                    count: prevState.count + 1
                }
            })
        }
        render(){
            //The Enhancements like functionality, states and methods are passed as props to the WrappedComponent(OriginalComponent)
            return(
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
            )
        }
    }
    //The NewComponent is returned. Here the NewComponent is WithCounter
    return WithCounter
}

export default withCounter