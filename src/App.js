import React from 'react';
import './App.css';
import Comment from './ComponentsAndProps/Comment';
import Clock from './StateAndLifecycle/Clock';
import Toggle from './HandlingEvents/Toggle';
import LoginControl from './ConditionalRendering/LoginControl';
import './index';
/*!!!!!!!!!!!!!!!Don't delete this file!!!!!!!!!!!!*/
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={comment : {
                    date: new Date(),
                    text: 'I hope you enjoy learning React!',
                    author: {
                        name: 'Hello Kitty',
                        avatarUrl: 'https://placekitten.com/g/64/64',
      }
    }};
  }

  render(){
    return(
     <div>
        <Comment
        date={this.state.comment.date}
        text={this.state.comment.text}
        author={this.state.comment.author}
        /> 
      <Clock/>
      <Toggle/>
      <LoginControl/>
    </div>
    );
  }

}

export default App;


  
