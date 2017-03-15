import React, { Component } from 'react'
import style from './css-app'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div style={style}>
        hello hashtag
      </div>
    )
  }
}

export default App
