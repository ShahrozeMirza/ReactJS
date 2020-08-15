import React, {Component} from 'react'
import withCounter from './withCounter'
//This component will use a functionality from a Higher Order Component
class HoverCounter extends Component{

    render(){
        //The methods, states or any additional data is passed as props to the WrappedComponent in the HOC. Those props are destructured as needed in the components which are to be enhanced i.e which require a common functionality defined in the HOC.
        const {count, incrementCount} = this.props

        return(
        <h1 onMouseOver={incrementCount}>{this.props.name} Hovered {count} Times</h1>
        )
    }
}

//The component which will use the functionality from the HOC will be wrapped inside the function as an argument and then exported. That function will be in the HOC. Which here means export HoverCounter alongwith the withCounter functionalities.

//The HoverCounter will not receive the the name prop, instead it will be passed to the HOC 'withCounter'

//10 is the 2nd param in the HOC i.e incrementCount
export default withCounter(HoverCounter,10)