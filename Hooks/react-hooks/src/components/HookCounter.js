import React,{useState} from 'react'
//1.Create a functional component and import {useState} Hook.
//2.Creata a state property initialized to '0' as initial state by calling the {useState} hook. 
//3.Create a method capable of setting that state property value.
//4.Assign the returned pair of values to variables using array destructuring and use them in the render functon.
//Here the first variable/parameter (count) will always contain the current value which is '0' at start and the second parameter/method (setCount) is a method which will accept an argument and update the current state with that argument.
function HookCounter(){
    
    const [count, setCount] = useState(0)
    return(
        //setCount becomes a function call on button click so we use arrow function. When the state is changed the component will re-render. The default value is never used on re-renders.
        <div>
           <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}
export default HookCounter

//Two IMPORTANT rules you have to follow when using Hooks !!

//1.Only call Hooks at the Top Level. Use Hooks at the top lvel of your function. Don't call Hooks inside loops, conditions or nested functions.

//2.Only call Hooks from React Functions. Call them from within React Functional components and not just any regular JavaScript funtion.

