import React from 'react'

function ChildComponent(props){
    return(
        <div>
            {/* <button onClick={props.greetHandler}>Click</button> */}
            {/* //If you want to pass a parameter from the child component to the parent method use arrow function */}
            <button onClick={() => props.greetHandler('Child')}>Click</button>
        </div>
    )
}

export default ChildComponent