import React, {Component} from 'react'

class RefsDemo extends Component{
   constructor(props){
       super(props)

       //1. Create a property and assign the createRef() method to it.
       this.inputRef = React.createRef()
   }

   componentDidMount(){
       //Now because the Ref we created is binded/attached to the input so it has an object of current which is attached to input because  the Ref has reference to input.
       //This "current" property is pointing to the actual DOM node which is "input" here.
       //The "current" property has access to all properties of the DOM node it is pointing to.
       //E.g in this case it can access properties and methods of "input" like "value","focus" etc.

       //3.Call the focus method on the element/DOM node to which the Ref is attached.
       console.log(this.inputRef)
       this.inputRef.current.focus()
   }

   clickHandler = () => {
       alert(this.inputRef.current.value)
   }

    render(){
        return(

            //2.Attach the ref to the DOM node
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo