import React, { Component } from 'react'
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
import Counter2 from './components/Counter2';


class App extends Component{

  render(){
    return (
      <div className="App">
        {/* <ClickCounterTwo/>
        <HoverCounterTwo />
        <User render= {(isLoggedIn)=> isLoggedIn ? 'John Noah' : 'Guest'} /> */}
        <Counter2 
          render={(count,incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        
        />

        <Counter2 
          render={(count,incrementCount)=>(
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        
        />
       
      </div>
      )
  }

}

export default App;
