import React, {useState} from 'react'
//This is the tutorial for useState hook when the state variable is an array.
//This is the same as with useState with objects. You have to merge and update the array using the spread operator manually. 

function UseStateArray() {

  const [items, setItems] = useState([])

  const addItem = () =>{
    setItems([ ... items ,{
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
    
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {
          items.map(item => (<li key={item.id}>{item.value}</li>))
        }
      </ul>
    </div>
  )
}

export default UseStateArray
