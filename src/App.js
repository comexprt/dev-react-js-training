import React from 'react'
import './App.css';
import FocusInput from './hookComponents/FocusInput';
import ClassTimer from './hookComponents/ClassTimer';
import HookTimer from './hookComponents/HookTimer';



function App() {
  return (
    <div className='App'>
       {/* <FocusInput /> */}
       <ClassTimer />
       <HookTimer />
    </div>
  )
}

export default App;
