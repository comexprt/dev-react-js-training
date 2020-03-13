import React, { Component } from 'react'
import './App.css';

import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
// import Input from './components/Input';


class App extends Component{

  render(){
    return (
      <div className="App">
         <FRParentInput  />
      </div>
      )
  }

}

export default App;
