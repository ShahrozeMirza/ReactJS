import React,{useRef} from 'react'
import UseImperativeHandle from './UseImperativeHandle';
function ParentRef() {
    const myRef = useRef();
    return (
        <div>
           <UseImperativeHandle ref={myRef}/>
           <button onClick={() => myRef.current.IncrementCount()}>Increment from Parent</button>
        </div>
    )
}

export default ParentRef
