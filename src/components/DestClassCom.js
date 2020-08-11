import React, {Component} from 'react'

//This is Destructuring Class Component Tutorial

//Destructuring is done inside render() method

class ClassDestructuring extends Component {
    render(){

        //For props
        const {movie,rating} = this.props

        //Can also be done for states
        // const {state1,state2} = this.state

        return (
        <h1>The Movie name is {movie} and it's rating is {rating}</h1>
            )
    }
    
}

export default ClassDestructuring