import React, {Component} from 'react'

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment(){
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((prevState) => ({
            counter: prevState.counter+1
        }))
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <h4>Count: {this.state.counter}</h4>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter