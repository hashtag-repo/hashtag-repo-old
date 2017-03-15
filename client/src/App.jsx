import React, { Component } from 'react'
import style from './css-app'
import UserMain from './components/UserMain.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div style={style}>
        <header>

        </header>
        <UserMain />
      </div>
    );
  }
}

export default App
