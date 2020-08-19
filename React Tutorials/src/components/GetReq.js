import React, {Component} from 'react'
import Axios from 'axios'


class GetReq extends Component{
    
    constructor(props) {
     //a) The control first comes in the constructor. 
      super(props)
      //3) We set an initial state where the response will be stored.
      this.state = {
         posts: [],
         errorMsg: '' 
      }
    }

    //The perfect place to make HTTP requests in react component is the 'componentDidMout()' lifecycle method. It is only executed when the component is mounted in its life. We place the HTTP logic inside it.
    //1) Install the Axion library with npm. 2) Attach the get() property/method with the Axion library. Axion is a promised based library. So, we attach .then() and .catch() methods. 
    
    componentDidMount(){
        //c) The control then comes in the componentDidMount method and after the response is received goes back to the render() method.
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                //4) After we receive the response, we change the state of the state property. As the state changes so the component will re-render.
                //d) Then after the response is received the controller comes back and displays the data.
                posts: response.data
            })
        })
        .catch(error => {
            this.setState({
                //4) We can also choose what errort to display(same procedure as the 'response')
                errorMsg: 'Failed to get data'
            })
        })
    }


    render(){
        //5) Destructure the 'state' property

        const {posts, errorMsg} = this.state
        console.log(posts)
        //b) The control then comes in the render method and sees the list is empty because the response is not received yet.
        return(
        <div>
            <h1>List of posts:</h1>
            {   
                //6) Display the what is needed in the JSX with the help of map() method.
                posts.length ? 
            posts.map(post => <h3 key={post.id}>{post.name}</h3>) :
            null
            }
            {
                //6) Display error if something is wrong
                errorMsg ? <h3>{errorMsg}</h3> : null
            }
        </div>
        )
    }
}

export default GetReq