import React,{useState} from 'react'
//This is tutorial for {useState} with previous state.

//In th previous tutorial i.e HookCounter, we were adding one to the current value of count. This works but it is not the correct and safe way of doing it. The correct and safer way is to pass a function to the setCount that has access to the 'previous state / old value' of the variable, which in this case is 'count'.

function HookCounterCorrect(){

    const initialCount = 0;
    const [count,setCount] = useState(initialCount)

    const increment5 = () => {

        for(let i = 0; i < 5; i++){
            setCount(prevState => prevState + 1)
        }
    }

    return(
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
        </div>
    )
}
export default HookCounterCorrect