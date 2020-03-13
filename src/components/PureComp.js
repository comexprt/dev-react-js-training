import React, { PureComponent } from 'react'

class PureComp extends PureComponent{
    render(){
          
    console.log('Pure comp Render')

    return (
        <h1>Pure Component {this.props.name}</h1>
    )
    }
}

export default PureComp