import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/hello'
import Message from './components/Message'
import Counter from './components/Counter'

// for advance export
// import {Greet} from './components/Greet'

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message /> */}
        {/* <Greet name="John" heroName="Captain America">
            <p>This is children props</p>
        </Greet>
        <Greet name="Noah" heroName="Batman" >
          <button>Action</button>
        </Greet>
        <Greet name="Ompad" heroName="Superman" /> 

        <Welcome name="John" heroName="Captain America"/>
        <Welcome name="Noah" heroName="Batman" />
        <Welcome name="Ompad" heroName="Superman" />  */}
       
        {/* <Hello /> */}
    </div>
  );
}

export default App;
