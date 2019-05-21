import React from 'react';
import ReactDOM from 'react-dom';
import './Greeting.css';

function UserGreeting(props){
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
  return <h1>Please sign up.</h1>
}

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {isloggedIn: false};
  }


  render(){
    const isLoggedIn =this.state.isLoggedIn;
    let h1;
    if(isLoggedIn){
      h1 = <UserGreeting/>;
    }
    else{
      h1 = <GuestGreeting/>;
    }

    return(
      <div>{h1}</div>
    );
  }
  
}

