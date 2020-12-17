import React from 'react';
import './App.css';
import logo from './assets/Bridgelabz.jpg';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      userName: 'Shubham'
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!" , $event);
    window.open(this.url, "_blank");
  }
  
  render(){
    return(
      <div>
        <h1>Hello {this.state.userName} to BridgeLabz</h1>
        <img src ={logo} onClick={this.onClick} alt ="Logo" />
      </div>
    );
  }
}

export default App;