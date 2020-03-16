import React, { Component } from 'react'
import './App.css';

import HookCounterOne from './hookComponents/HookCounterOne';
import ClassCounterOne from './hookComponents/ClassCounterOne';


class App extends Component{

  render(){
    return (
      <div className="App">
        {/* <ClassCounterOne /> */}
        <HookCounterOne  />
      </div>
      )
  }

}

export default App;
