import {useState} from 'react'

function useCustomCounter(initialCount, value) {
    const [count, setCount] = useState(initialCount, value);

    const IncrementCount = () => {
        setCount(prevCount => prevCount + value);
    };
    const DecrementCount = () => {
        setCount(prevCount => prevCount - value);
    };
    const Reset = () => {
        setCount(initialCount);
    };

    return [count, IncrementCount, DecrementCount, Reset];
}

export default useCustomCounter;
