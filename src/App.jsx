import React from 'react';
import './App.css';
import Comment from './ComponentsAndProps/Comment';
import Greeting from './ConditionalRendering/Greeting';
import Toggle from './HandlingEvents/Toggle';
import './index';
import Clock from './StateAndLifecycle/Clock';

class App extends React.Component{
  constructor(props){
    super(props);
    this.comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
      }
    };
  }

  render(){
    return(
     <div>
        <Comment
        date={this.comment.date}
        text={this.comment.text}
        author={this.comment.author}
        /> 
      <Clock/>
      <Toggle/>
      <Greeting isLoggedIn={false}/>
    </div>
    );
  }

}

export default App;


  
