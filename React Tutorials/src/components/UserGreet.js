import React, {Component} from 'react'

//This is Conditional Rendering in React Tutorial

class UserGreet extends Component{
   constructor(props){
       super(props)

       this.state = {
           isLoggedIn: true
       }
   }

   render(){
    //1. Conditional Rendering with if/else
    
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Hello Shahroze
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             Hello User
    //         </div>
    //     )
    // }

    //2. Conditional Rendering with Element Variables

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Hello Shahroze</div>
    // }
    // else{
    //     message = <div>Hello User</div>
    // }
    // return(
    //     <div>
    //         {message}
    //     </div>
    // ) 
     
    //3. Conditional Rendering with Ternary Operators
    //This is the only Conditional Rendering which can be written inside the JSX
    //It is mostly used in Conditional Rendering

    return this.state.isLoggedIn ? ( <div>Hello Shahroze</div> ) : ( <div>Hello User</div> )
    
    //4. Conditional Rendering with Short Circuit Operator
    //It only renders if the R.H.S condition is true otherwise no change is made and nothing happens
    
    // return this.state.isLoggedIn && <div>Hello Shahroze</div>
   }
}

export default UserGreet 

