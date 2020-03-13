import React, { Component } from 'react'
import './App.css';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/userContext'
import ComponentF from './components/ComponentF';


class App extends Component{

  render(){
    return (
      <div className="App">
        <UserProvider value="John Noah">
            <ComponentC/>
        </UserProvider>
          
      </div>
      )
  }

}

export default App;
