import React, {Component} from 'react'

//This is Event Handling in Class Component Tutorial

class ClassClick extends Component{
   
    //Remember the 'function' keyword is not added 
    clickHandler(){
        console.log('Button is Clicked in Class Component')
    } 

    render(){
        return (
            //this handler function will be written with the 'this' keyword in class component
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick