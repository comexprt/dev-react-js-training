import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(pros){
            super (pros)
    
            this.state = {
                count:0
            }
        }
    
        incrementCount=()=>{
            this.setState(prevState => {
                return {count : prevState.count + incrementNumber}
            })
        }

        render() {
            return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }

    return WithCounter     
}

export default withCounter