import React, {Component} from 'react'

//This will be called in a Parent Component named InputRefParent.js and from that file the focusInput() method will be called.
//We will not call the Ref directly on the DOM node by default(i.e when pg loads)

class InputRefChild extends Component{
    constructor(props){
        super(props)


        this.inputRef = React.createRef()

    }

    focusInput(){
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default InputRefChild

