import React, { Component } from 'react'
import InnerLevel from './InnerLevel'
//Top level Component for Context and will be wrapped inside the provide component in App.js
class TopLevel extends Component {
  render() {
    return (
      <div>
          <InnerLevel/>
      </div>
    )
  }
}

export default TopLevel
