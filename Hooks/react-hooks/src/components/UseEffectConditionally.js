import React,{useState, useEffect} from 'react'
//Sometimes the component may contain multiple elements, logics and states. On the change of very state the component will render again. In this case the the use effect will run on the render caused by the change of every state even if that state is not related to the useEffect. So, we need a way to conditionally run the effect only on the certain state or props change. To do that, we simply pass a second parameter to the use effect hook which is an array. Within that array we specify either the props or states that we need to watch for. Only when those props or states change, the effect will run otherwise if there is no change in those props or states, the effect will not run.

function UseEffectConditionally(){

   const [count, setCount] = useState(0)
   const [name, setName] = useState('')

   useEffect(() => {
       console.log('updated')
       document.title = `Title ${count}`
   },[count])

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <h3>You Clicked {count} Times</h3>
            <button onClick={() => setCount(prevState => prevState + 1)}>Click</button>
        </div>
    )
}

export default UseEffectConditionally