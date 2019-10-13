import React from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends React.Component{

  state = {
    serverURL : 'http://localhost/4000'
  }

  componentDidMount = () => {
    console.log("mounted")
    const socket = socketIOClient('http://localhost/4000');
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
