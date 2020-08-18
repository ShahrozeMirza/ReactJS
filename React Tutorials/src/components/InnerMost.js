import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
//InnerMost Level Component for context and will consume the value provided by provider component in the App.js. You can consume it any component which is nested inside the top level component which is wrapped inside the Provider Component.
class InnerMost extends Component {
  render() {
    return (
     <UserConsumer>
         {
             //The function takes the value from the provider component as parameter. In the provider the value is shahroze and it is a name/username so we pass a parameter username because it relates with that value
             (username) =>{
                 return (
                    <div>
                       <h1> I am {username}</h1>
                    </div>
                 )
             }
         }
     </UserConsumer>
    )
  }
}

export default InnerMost
