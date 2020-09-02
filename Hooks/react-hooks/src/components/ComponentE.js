import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from '../App'

//3.Import the useContext and the necessary context(UserContext,ChannelContext in this case.)
//4.Call the useContext function passing in the context as it's argument.
//5. The context returns the context value so assign the function call to a variable.


function ComponentE() {
  
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  
  return (
    <div>
      From useContext Hook User is {user} and From useContext Hook Channel is {channel}
    </div>
  )
}

export default ComponentE
