import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


class LifecycleA extends Component {
  /*This is Class Component Lifecycle Tutorial. The first phase in CC Lifecycle is mounting. It consists of
    4 phases which are discussed in this tutorial in the order in which the are executed. */

  constructor(props){
      super(props)

      this.state = {
          name: 'Shahroze'
      }
      //Execution 1.
      console.log('LifecycleA constructor')
  }
     //Execution 2. It is for both Mounting and Update cycle
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps')
          return null
    }

    //Execution 4.
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
     console.log('LifecycleA shouldComponentUpdate')
     return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(prevProps,prevState){
      console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        name: 'Codevolution'
      })
    }

  render() {
    //Execution 3. It is for both Mounting and Update cycle
    console.log('LifecycleA render')   
    return (
      <div>
          <div>Lifecycle A</div>
          <button onClick={this.changeState}>Click Me</button>
          <LifecycleB/>
      </div>
      
    )
  }
}

export default LifecycleA