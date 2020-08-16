import React, { Component } from 'react'
//This example is to learn the pattern of the Render Props.
class RenderPropUser extends Component {
  render() {
    return (
      <div>
        <h1>User {this.props.render(true)}</h1>
      </div>
    )
  }
}

export default RenderPropUser
