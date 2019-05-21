import React from 'react';
import ReactDOM from 'react-dom';
import './Greeting.css';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {isloggedIn: false};
  }

  UserGreeting(props){
    return <h1>Welcome back!</h1>
  }
  
  GuestGreeting(props){
    return <h1>Please sign up.</h1>
  }
  
  render(){
    const isLiggedIn =ths.state.isLoggedIn;
    if(isLoggedIn){
      h1 = <UserGreeting/>;
    }
    h1 = <GuestGreeting/>;
    return(
      <div>{h1}</div>
    );
  }
  
}

