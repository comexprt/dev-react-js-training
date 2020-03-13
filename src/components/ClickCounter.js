import React, { Component } from 'react'
import WithCounter from './withCounter'

class ClickCounter extends Component{

    

  render(){
    const { count, incrementCount} = this.props
    return  <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
     
  }

}

export default WithCounter(ClickCounter, 5);
