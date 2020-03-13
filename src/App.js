import React, { Component } from 'react'
import './App.css';

import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
// import Input from './components/Input';


class App extends Component{

  render(){
    return (
      <div className="App">
         <FocusInput/>
      </div>
      )
  }

}

export default App;
