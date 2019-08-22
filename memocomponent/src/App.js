import React from 'react';
import './App.css';
import Title from './components/title';
import Message from './components/message';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:{
      title:"hello world",
      message:'welcome to Nepal'
    }
  }
  }

onHandleClick=()=>{
  let user=this.state.user
  user.message="welcome to United States"

  this.setState({
    user
  })
}


render(){
  return(
    <div className="App">
      <Title title={this.state.user.title}></Title>
      <Message message={this.state.user.message}></Message>    

      <button onClick={this.onHandleClick}>Update</button>

    
    </div>
  )
}
}



export default App;
