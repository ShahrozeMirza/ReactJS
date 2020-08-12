import React,{Component} from 'react'

class ErrorBoundary extends Component{

    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }

    }

    
    //This will set the state to true if it catches any error
    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    //This take 2 parameters. Info the information about the error. This method is pretty much used to log the errors. So, if you have a login service you can call it, passing in the error and the info parameters. For now we will si,ply log them in the console
    //What we see in the console will be contained by the Error and the Info object in componentDidCatch
    //The final point is that error boundaries catch errors during rendering in life cycle methods and in the constructors of the whole tree below them. However they do not catch errors inside event handlers. If you have an onClic Handler and want to catch an error you just need to use the regular try catch statements and not error boudaries 

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

    render(){
        if(this.state.hasError){
            //On Error this Error will be displayed as a Fallback UI
            return(
                <h1>Somthing Went Wrong :(</h1>
        )
        }

        return(
            //this.props.children refers to the componentwe are actually rendering
            this.props.children
        )
        
    }
}

export default ErrorBoundary