import React from 'react';
import './App.css';
import logo from './assets/Bridgelabz.jpg';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      userName: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!" , $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    this.setState({userName: event.target.value})
  }
  
  render(){
    return(
      <div>
        <h1>Hello {this.state.userName} to BridgeLabz</h1>
        <img src ={logo} onClick={this.onClick} alt ="Logo" />
        <div className= "text-box">
          <input onChange={this.onNameChange} />
        </div>
      </div>
    );
  }
}

export default App;