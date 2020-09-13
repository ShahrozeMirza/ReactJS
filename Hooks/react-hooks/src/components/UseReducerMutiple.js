import React, {useReducer} from 'react'

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

//When dealing with multiple state variables that have the same state transitions, it is a good idea to have multiple useReducers making use of the same reducer function. This will avoid the complexity of merging the state if it were to be an object and also prevents us from duplicating code in the reducer function.

function UseReducerMultiple() {

 const [count,dispatch] = useReducer(reducer,initialState)
 const [count2,dispatch2] = useReducer(reducer,initialState)

    return(
        <div>
            <div>
                <h1>Counter 1 - {count}</h1>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>

            <div>
                <h1>Counter 2 - {count2}</h1>
                <button onClick={() => dispatch2('increment')}>Increment</button>
                <button onClick={() => dispatch2('decrement')}>Decrement</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducerMultiple