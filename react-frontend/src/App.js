import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import getWeb3 from './utils/getWeb3';

class App extends Component {
  constructor() {
    super()
    this.state = { web3: null }
  }

  componentDidMount() {
    getWeb3.then(results => {
      this.setState({ web3: results.web3 }, this.instantiateContract)
    }).catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    // Confirm that web3 is available
    console.log(this.state.web3)
    
    // TODO - instantiate the contract
    console.log('TODO - Instatiating Contract')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
