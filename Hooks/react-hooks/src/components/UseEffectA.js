import React, {useState, useEffect} from 'react'

function UseEffectA (){
    // The useEffect Hook lets you perform side effects in functional components. It is a close replacemet for 'componentDidMount', 'componentDidUpdate' and 'componentWillUnmount'.
    const [count, setCount] = useState(0)
    
    //Just like useState, useEffect is also a function. We simply have to call it. To this useEffect hook we pass in a parameter. This parameter is a function which gets executed after every render of the component. When we specify useEffect, we are basically requesting react to execute the function that is passed as an argument everytime the component renders. useEffect runs after every render of the component. It is the same in class component but with the help of useEffect we don't have to right the same piece of code on different places.
    //useEffect is placed inside the component. By doing this we can easily access the component's states and props without having to write any additional code.
    useEffect(() =>{
        document.title = `You Clicked ${count} Times`
    })
    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffectA