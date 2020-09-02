import React from 'react'
import {UserContext, ChannelContext} from '../App'

//This is Context Consumption of UseContext without the useContext Hook
//3.Consume the value from the provider (withour hooks method)
//(i)Make use of the render props pattern in the JSX to get hold of the value passed by the context.
function ComponentF() {
  return (
    <div>
       <UserContext.Consumer>
           {
               user =>{
                   return(
                     <ChannelContext.Consumer>
                         {
                             channel =>{
                                 return(
                                 <div>User Context Value is {user} and User Channel Value is {channel}</div>
                                 )
                             }
                         }
                     </ChannelContext.Consumer>
                   )
               }
           }
       </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
