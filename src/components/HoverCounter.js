import React, { Component } from 'react'
import WithCounter from './withCounter'

class HoverCounter extends Component{

  render(){
    const {count,incrementCount} = this.props
    return  <button onMouseOver={incrementCount}>Hovered {count} times</button>
     
  }

}

export default WithCounter(HoverCounter, 10);
