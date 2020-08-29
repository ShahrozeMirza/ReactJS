import React,{useState, useEffect} from 'react'

//Using useEffect for once we can mimic the componentDidMount in functional components. In class component we setup the event listener only once and that is in componentDidMount. To mimic the componentDidMount in func. comp. we just pass an empty array to the useEffect as the 2nd param. When we pass an empty array to useEffect hook react basically tell the useEffect Hook that this effect does not depend on any state or props so there is no need to run the effect on evey render. The useEffect understands this and runs the effect only once on the initial render.
//In useEffect we setup the event lisetener within the useEffect Hook.

function UseEffectOnce() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouseMovement = (e) =>{
        console.log("Mouse Event");
        
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() =>{
        console.log("useEffect Called");
        window.addEventListener('mousemove', mouseMovement)


        //When we unmount a component it is necessary to do a cleanup because if we don't then the component will unmout but the functionality in that component will still be working and this is an error. So,we need a cleanup code(in class component it is performed in componentWillUnmount() lifecycle method)Whatever function we  return here is basically our cleanup function and mimicry of the componentWillUnmount() lifecycle method.

        //When you want to execute some component cleanup code, you include it in a function and return that function from the function passed to the useEffect Hook. The cleanup code can be cancelling subscriptions, timers or even removing event handlers.
       
        return () =>{
            console.log("Component Unmount Code");

            window.removeEventListener('mousemove', mouseMovement)

        }
    },[])
    return(
        <div>
            Hooks X - {x}, Y - {y}
        </div>
    )
}
export default UseEffectOnce