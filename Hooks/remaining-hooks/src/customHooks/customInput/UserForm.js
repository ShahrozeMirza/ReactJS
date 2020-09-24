import React,{useState} from 'react'
import useCustomInput from './useCustomInput';

function UserForm() {

  const [firstName,setFirstName,resetFirstName] = useCustomInput('');
  const [lastName,setLastName,resetLastName] = useCustomInput('');
  const submitHandler = (e) =>{
     
    e.preventDefault();
     
      resetFirstName();
      resetLastName();

      alert(`Hello ${firstName} ${lastName}`);
  }

  return (
    //When specifying as a prop, we use the spread operator i.e '...'
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...setFirstName}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...setLastName}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm;
