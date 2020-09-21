import React,{useState, useEffect, useRef} from 'react'

function UseRefInterval() {

  const[timer,setTimer] = useState(0);

  const intervalRef = useRef();
  
  useEffect(() => {
       intervalRef.current = setInterval(() =>{
          setTimer(prevTime => prevTime + 1);
      },1000);

      return () => {
          clearInterval(intervalRef.current);
      };
  },[])
  return (
    <div>
        <h1>Timer - {timer}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
    </div>
  )
}

export default UseRefInterval
