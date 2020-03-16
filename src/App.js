import React, { Component } from 'react'
import './App.css';
import IntervalClassCounter from './hookComponents/IntervalClassCounter';
import IntervalHookCounter from './hookComponents/IntervalHookCounter';


class App extends Component{

  render(){
    return (
      <div className="App">
        <IntervalClassCounter />
        <IntervalHookCounter />
      </div>
      )
  }

}

export default App;
