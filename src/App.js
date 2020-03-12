import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

// for advance export
// import {Greet} from './components/Greet'

function App() {
  return (
    <div className="App">
        <Greet />
        <Welcome />
    </div>
  );
}

export default App;
