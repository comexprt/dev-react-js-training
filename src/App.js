import React, { Component } from 'react'
import './App.css';

import HookCounterOne from './hookComponents/HookCounterOne';


class App extends Component{

  render(){
    return (
      <div className="App">
        {/* <ClassCounter /> */}
        <HookCounterOne  />
      </div>
      )
  }

}

export default App;
