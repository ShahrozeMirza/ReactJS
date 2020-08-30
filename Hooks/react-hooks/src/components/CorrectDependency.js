import React,{useState,useEffect} from 'react'
//This tutorial is about that how easy it is to make mistakes when specifying the dependency list for useEffect. This is a tutorial to remind that when you use useEffect with only one initial render, do it carefully, don't forget to leave the dependency array emplty if it depends on some state or props. 
function CorrectDependecy(){

    const [count, setCount] = useState(0)  //--> useState before a useEffect corresponding to that effect

    const tick = () =>{
        setCount(count + 1)
    }

    useEffect(() =>{
        

        const interval = setInterval(tick, 1000)

        return () =>{
            clearInterval(interval)
        }
    },[count])

    //This commented example is about the following points:
    //1. In class components related code was splited and irrelevant code was put together. Hooks solve thi problem. You can include multiple useEffect calls in a single component. Each useEffect has a useState before it corresponding to that effect. So, if you have multiple effects to run, make sure you separate them out rather than having all the code in a single useEffect.

    //2. It is recommended that whenever you need to call a function within useEffect, just go ahead and define the function within useEffect. This way when you read through the effect, you are much more likely to see that you have a prop which has to be sepecified as a dependency.

    // const[someStateVariable, stateSetter] --> useState before a useEffect corresponding to that effect
    // useEffect(() =>{

    //     function doSomething(){
    //         // console.log(someProp);
            
    //     }
    // },[someProp])

    return(
        <div>
           <h1>{count}</h1>
        </div>
    )
}

export default CorrectDependecy