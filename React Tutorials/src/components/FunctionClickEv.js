import React from 'react'

//This is Event Handling in Function Component Tutorial

function FunctionClick(){

    function clickHandler(){
        console.log('Button is Clicked in Function Component');
    }

    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick