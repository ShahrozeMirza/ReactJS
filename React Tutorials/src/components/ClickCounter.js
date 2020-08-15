import React, {Component} from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component{

    render(){

        //The methods, states or any additional data is passed as props to the WrappedComponent in the HOC. Those props are destructured as needed in the components which are to be enhanced i.e which require a common functionality defined in the HOC.
        
        const {count, incrementCount} = this.props
        
        return(
            <button onClick={incrementCount}>Clicked {count} Times</button>
        )
    }
}
//The component which will use the functionality from the HOC will be wrapped inside the function as an argument and then exported. That function will be in the HOC. Which here means export ClickCounter alongwith the withCounter functionalities.

export default withCounter(ClickCounter)