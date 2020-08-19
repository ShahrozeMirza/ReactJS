import React, { Component } from 'react'
import Axios from 'axios'

class PostReq extends Component {

  constructor(props) {
    super(props)
   //2) Set the initial state of the properties to which you want to send the data
    this.state = {
       name:'',
       username: '',
       email:''
    }
  }
    
  changeHandler = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  submitData = (e) =>{
       //6.) The post method will be written here as we will send the data using post method on form submission. The post method takes 2 parameters, first is the 'url' and the second parameter is the data which in our case is 'this.state'. After the request is completed the response or error is received.
      e.preventDefault();
      console.log(this.state)
      Axios.post('https://jsonplaceholder.typicode.com/users',this.state)
      .then(response => {
          console.log(response)
      })
      .catch(error =>{
          console.log(error)
      })
  }


  render() {

    const {name,username,email} = this.state
    //1.) Create a form and assign the name attribute according to the data. 
   
    return (
         //3.) Add a value attribute and assign the value which will be set in the setState method i.e bind the values.
          //4.) add an onChange event handler to detect change in the input field. The new value will be set in the onChange event handler. In the handlerMethod setState will wwe use to change the states and assign new values as key:value pairs.
           //5.) Create a submit button and on the form assign an onSubmit handler. The post method will be written on that handler because we will post the data on submission.
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.submitData}>
        <div>
            <input type="text" name="name" value={name} onChange={this.changeHandler} />
        </div>
        <div>
            <input type="text" name="username" value={username} onChange={this.changeHandler} />
        </div>
        <div>
            <input type="email" name="email" value={email} onChange={this.changeHandler} />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
      </div>
    )
  }
}

export default PostReq
