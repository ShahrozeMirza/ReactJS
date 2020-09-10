import React,{useReducer} from 'react'


const initialState = {
 initialCount: 0,
 secondCount: 10
}

const reducer = (state,action) => {
    switch(action.type){
            case 'increment':
                 return {...state, initialCount: state.initialCount + action.value}
            case 'decrement':
                 return {...state, initialCount: state.initialCount - action.value}
            case 'increment2':
                 return {...state, secondCount: state.secondCount + action.value}
            case 'decrement2':
                 return {...state, secondCount: state.secondCount - action.value}    
            case 'reset':
                return initialState
            default:
                return state
    }   
}

function UseReducerCounterObj() {
  
  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h1>Initial Count - {count.initialCount}</h1>
        
        <button onClick={() => dispatch({type: 'increment',value: 1})}>increment</button>
        <button onClick={() => dispatch({type: 'decrement',value: 1})}>decrement</button>
        <button onClick={() => dispatch({type: 'increment',value: 5})}>increment 5</button>
        <button onClick={() => dispatch({type: 'decrement',value: 5})}>decrement 5</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>

        <h1>Second Count - {count.secondCount}</h1>
        <button onClick={() => {dispatch({type: 'increment2',value: 2})}}>Increment Second Count</button>
        <button onClick={() => {dispatch({type: 'decrement2',value: 2})}}>Decrement Second Count</button>

    </div>
  )
}

export default UseReducerCounterObj
