import React, { Component } from 'react'
import './App.css';
import ClassCounter from './hookComponents/ClassCounter';
import HookCounter from './hookComponents/HookCounter';
import HookCounterTwo from './hookComponents/HookCounterTwo';



class App extends Component{

  render(){
    return (
      <div className="App">
          {/* <ClassCounter /> */}
          {/* <HookCounter /> */}
          <HookCounterTwo />
      </div>
      )
  }

}

export default App;
