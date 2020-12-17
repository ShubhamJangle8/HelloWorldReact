import React from 'react';
import './App.css';
import logo from './assets/Bridgelabz.jpg';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      body: 'Hello All to BridgeLabz'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.body}</h1>
        <img src ={logo} alt ="Logo" />
      </div>
    );
  }
}

export default App;