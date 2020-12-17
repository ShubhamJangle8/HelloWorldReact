import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      body: 'Hello Shubham for Capgemini'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.body}</h1>
      </div>
    );
  }
}

export default App;