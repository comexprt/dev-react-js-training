import React, { Component } from 'react'
import './App.css';
import ClassMouse from './hookComponents/ClassMouse';
import HookMouse from './hookComponents/HookMouse';
import MouseContainer from './hookComponents/MouseContainer';


class App extends Component{

  render(){
    return (
      <div className="App">
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        <MouseContainer />
      </div>
      )
  }

}

export default App;
