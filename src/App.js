import React, { Component } from 'react'
import './App.css';
import ClassMouse from './hookComponents/ClassMouse';
import HookMouse from './hookComponents/HookMouse';


class App extends Component{

  render(){
    return (
      <div className="App">
        {/* <ClassMouse /> */}
        <HookMouse />
      </div>
      )
  }

}

export default App;
