import React, {useState} from 'react'
import UseEffectOnce from './UseEffectOnce'
//This is linked to the tutorial 'useEffectOnce' in which we will also implement the mimicry of componentWillUnmount() lifecycle.

function UseEffectCleanup() {
    const[display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Set Display</button>
            {display && <UseEffectOnce/>}
        </div>
    )
}

export default UseEffectCleanup