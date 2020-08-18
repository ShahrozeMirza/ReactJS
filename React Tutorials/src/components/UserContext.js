import React from 'react'
//1. Step 1 is to create the context.
//If there is no Provider Component the default value will be used and displayed, The default value is set in the React.createContext() method. 
const UserContext =  React.createContext('a Frontend React Developer')

//Every context object created using the React.createContext() method comes with  a Provider and Consumer component. We have to use them so we have to export them. We should export them with some better name so.

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export{UserProvider, UserConsumer}

//There is another method for consuming value from a context. It is by using the contextType property on a class. First export the context itself.

export default UserContext