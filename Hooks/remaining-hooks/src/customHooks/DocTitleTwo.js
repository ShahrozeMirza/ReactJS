import React,{useState} from 'react'
import useDocTitle from "./useDocTitle";

function DocTitleTwo() {
    const [count, setCount] = useState(0);

    useDocTitle(count);
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incerement Count</button>
        </div>
    )
}

export default DocTitleTwo;
