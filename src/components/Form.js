import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)

      this.state = {
          username: '',
          comment: '',
          topic: 'REACT'
      }
    }


    //These are Class Properties

    changeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    topicHandler = (event) => { 
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();
    }

    render(){
        //Array destructuring for cleaner code so we don't have to use this.state with everything.
        const {username, comment, topic} = this.state

        return(
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.changeUsernameHandler} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea type="text" value={comment} onChange={this.commentHandler} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.topicHandler}>
                        <option value="react">REACT</option>
                        <option value="angular">ANGULAR</option>
                        <option value="vue">VUE</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form