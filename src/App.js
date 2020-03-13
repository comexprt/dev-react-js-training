import React, { Component } from 'react'
import './App.css';

import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';


class App extends Component{

  render(){
    return (
      <div className="App">
         <RefsDemo/>
      </div>
      )
  }

}

export default App;
