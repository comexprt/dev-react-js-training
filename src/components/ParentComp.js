import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component{

  constructor(props) {
      super(props)

      this.state = {
          name : 'john'
      }
  }

  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name : 'john'
        })
    }, 2000)
}


  render(){
    console.log('*********** Parent comp Render ***********')
    return (
      <div className="App">
          Parent Component
          <RegComp name={this.state.name}></RegComp>
          <PureComp name={this.state.name}></PureComp>
      </div>
      )
  }

}

export default ParentComp;
