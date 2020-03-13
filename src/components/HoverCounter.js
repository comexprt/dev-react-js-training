import React, { Component } from 'react'

class HoverCounter extends Component{

    constructor(pros){
        super (pros)

        this.state = {
            count:0
        }
    }

    incrementCount=()=>{
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

  render(){
    const {count} = this.state
    return  <button onMouseOver={this.incrementCount}>Hovered {count} times</button>
     
  }

}

export default HoverCounter;
