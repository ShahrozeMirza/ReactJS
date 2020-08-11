import React, { Component } from 'react'
class LifecycleB extends Component {
  /*This is Class Component Lifecycle Tutorial. The first phase in CC Lifecycle is mounting. It consists of
    4 phases which are discussed in this tutorial in the order in which the are executed. This is Child
    of LifecycleMountingA */

  constructor(props){
      super(props)

      this.state = {
          name: 'Shahroze'
      }
      //Execution 1.
      console.log('LifecycleB constructor')
  }
     //Execution 2.
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleB getDerivedStateFromProps')
          return null
    }

    //Execution 4.
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
      console.log('LifecycleB shouldComponentUpdate')
      return true
     }
 
     getSnapshotBeforeUpdate(prevProps,prevState){
       console.log('LifecycleB getSnapshotBeforeUpdate')
       return null
     }
 
     componentDidUpdate(prevProps,prevState){
       console.log('LifecycleB componentDidUpdate')
     }


  render() {
    //Execution 3.
    console.log('LifecycleB render')   
    return (
      <div>
          <div>Lifecycle B</div>
      </div>
      
    )
  }
}

export default LifecycleB