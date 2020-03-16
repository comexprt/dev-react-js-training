import React, { Component } from 'react'
import './App.css';
import ClassCounter from './hookComponents/ClassCounter';
import HookCounter from './hookComponents/HookCounter';



class App extends Component{

  render(){
    return (
      <div className="App">
          {/* <ClassCounter /> */}
          <HookCounter />
      </div>
      )
  }

}

export default App;
