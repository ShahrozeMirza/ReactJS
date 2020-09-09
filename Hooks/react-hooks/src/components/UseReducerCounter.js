import React, {useReducer} from 'react'
//1. Import the useReducer hook from react. Just like the other hooks useReducer is a function. We simply have to call it in our functional component.

//2. Define the reducer function and the initial state.
//The reducer function itself accepts two params and returns a single value which is the new state. First is the current state and second is the action. The action can be called an instruction to the reducer function based on which the reducer will perform the necessary state transition. The convention to execute the code based on the action is to use switch statements.
const initialState = 0
const reducer = (state,action) => {
   switch(action){
       case 'increment':
            return state + 1
       case 'decrement':
           return state - 1
       case 'reset':
            return initialState
       default:
            return state

   }
}

function UseReducerCounter() {
   
//The useReducer hook accepts two arguments. The first one is the 'reducer' function and the second one is the initial state.

//3.Now we need to get a hold of a value to diplay in the JSX and we also need a way to call the reducer function with the appropriate action. That is exactly what useReducer returns. Similar to useState the useReducer returns a pair of values which we can get hold of using the array destructuring syntax. The useReducer returns a new state (count in our case) paired with a 'dispatch' method. The dispatch method allows us to execute the code corresponding to a particular action. The argument passed to the dispatch method is the action that is specified in the reducer function.

 const [count,dispatch] = useReducer(reducer,initialState)

    return(
        <div>

            <h1>{count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

        </div>
    )
}

export default UseReducerCounter