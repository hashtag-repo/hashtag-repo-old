import React, { Component } from 'react';
// import style from './css-app';
import UserMain from './components/UserMain.jsx';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // console.log(UserMain);
  }

  render () {
    return (
      <div className="container">
        <header className="app-header">
          Header
        </header>
        <UserMain />
      </div>
    );
  }
}

export default App

 
