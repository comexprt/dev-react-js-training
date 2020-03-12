import React, { Component } from 'react'

class ClassClick extends Component{

    clickHandler(){
        console.log('Clicked the button')
    }   


    render(){
    return (
        <button onClick = {this.clickHandler} >
        Click me
    </button>
    )
    }
}

export default ClassClick