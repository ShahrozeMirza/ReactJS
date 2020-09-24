import React,{useState} from 'react'
import useCustomCounter from "./useCustomCounter";

function CounterOne() {
    const  [count, IncrementCount, DecrementCount, Reset] = useCustomCounter(5,5);
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={IncrementCount}>Increment</button>
            <button onClick={DecrementCount}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterOne;
