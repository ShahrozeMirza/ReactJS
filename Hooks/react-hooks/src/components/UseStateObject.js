import React, {useState} from 'react'
//A state variable can be a string, a number, boolean, an object or even an array.

function UseStateObject() {
//This is useState with object tutorial. How to use the useState hook when the state variable is an object.
  const [name, setName] = useState({fname:'' , lname:'' })  
  return (
    <div>
      {/*The {useState} hook does not automatically merge and update the object. This is a key difference to setState which you come across in class components. The setState will merge the state whereas the useState Hook setterFunction will not merge and update the object automatically. You have to do it manually using the spread operator with the state object which in this case is the 'name' and then pass the value to the setterFunction.*/}

      {/* The spread operator makes a copy of the name object and then tells to only update the firstname. Same is of lastname. In this way we are not overriding the original object. */}
      <input type="text" value={name.fname} onChange={e => setName({ ... name, fname: e.target.value})}/>
      <input type="text" value={name.lname} onChange={e => setName({ ... name, lname: e.target.value})} />

      <h2>Your First Name is: {name.fname}</h2>
      <h2>Your Last Name is: {name.lname}</h2>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default UseStateObject
