import React, { Component } from 'react'
import './App.css';
import PostForm from './newComponents/PostForm';
// import PostList from './newComponents/PostList';



class App extends Component{

  render(){
    return (
      <div className="App">
        {/* <PostList/> */}
        <PostForm />
          
      </div>
      )
  }

}

export default App;
