import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component{

    constructor(props){
        super(props)
        this.componentRef = React.createRef()
       
    }

    // focusInput(){
    //     this.inputRef.current.focus()
    // }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    

  render(){
    return (
      <div>
           {/* <input type="text" ref={this.inputRef}/> */}
            <Input ref={this.componentRef}/>
            <button onClick={this.clickHandler}>Focus  Input</button>

      </div>
      )
  }

}

export default FocusInput;
