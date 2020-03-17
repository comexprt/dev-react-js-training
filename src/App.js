import React from 'react'
import './App.css';
import CounterOne from './hookComponents/CounterOne';
import CounterTwo from './hookComponents/CounterTwo';



function App() {
  return (
    <div className='App'>
        <CounterOne />
        <CounterTwo />
    </div>
  )
}

export default App;
