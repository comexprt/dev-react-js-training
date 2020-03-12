import React, { Component } from 'react'
import Message from './Message'

class UserGreeting extends Component{

  
    constructor(props){
        super(props)

        this.state = {
          isloggedIn:true
        }
        

    }



    render(){

        // 4th  - short circuit operator  - best
        return this.state.isloggedIn && <div> Welcome Vishwas</div> 


        // 3rd approach  - best
        // return this.state.isloggedIn ? (
        //     <div> Welcome Vishwas</div> 
        // ) : (
        //     <div>Welcome Guest</div>  
        // )

        //2nd approach
        // let message
        // if (this.state.isloggedIn){
        //     message = <div>Welcome vishwas</div>
        // }else{
        //     message = <div>Welcome Guest</div>  
        // }
        // return <div>{message}</div>

        //first approach
        // if (this.state.isloggedIn){
        //    return <div>Welcome vishwas</div>
        // }else{
        //    return <div>Welcome Guest</div>   
        // }

    // old
    // return (
    //     <div>
    //       <div>Welcome vishwas</div>
    //       <div>Welcome Guest</div>
        
    //      </div>
    // )
    }
}

export default UserGreeting