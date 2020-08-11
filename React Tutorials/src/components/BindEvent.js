import React,{Component} from 'react'

class BindEvent extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }
        
        //3.Binding in the Class Constructor
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'GoodBye'
        })
    }

    // clickHandler = () => {
    //     this.setState({
    //         message:'GoodBye'
    //     })
    // }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* 1.Use the 'bind' keyword and bind the handler in the render() method
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* 2.Second Approach is to use Arrow Function in the render() method.
                <button onClick={() => {this.clickHandler()}}>Click</button> */}
                {/* 3.Binding in the Class Constructor */}
                <button onClick={this.clickHandler}>Click</button>
                {/* 4.Use an Arrow Function in the class property i.e change the way you define your method in the class.
                <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default BindEvent