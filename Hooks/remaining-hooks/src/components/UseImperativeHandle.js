import React,{useState,forwardRef,useImperativeHandle} from 'react'

const UseImperativeHandle = forwardRef((props,ref) => {
   const [count, setCount] = useState(0);
   useImperativeHandle(ref, () => ({
       IncrementCount
   }));
   const IncrementCount = () => {
       setCount(count + 1);
   };
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={IncrementCount}>Increment</button>
        </div>
    )
});

export default UseImperativeHandle
