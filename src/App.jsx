import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import './App.css';
import './index';
/*import './ComponentsAndProps/FormatDate';
import './ComponentsAndProps/Avatar';
import './ComponentsAndProps/UserInfo';*/
import './ComponentsAndProps/Comment';
import './StateAndLifecycle/Clock'
import './HandlingEvents/Toggle'
import './ConditionalRendering/Greeting'

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
        date={comment.date}
        text={comment.text}
        author={comment.author}
        /> 
      <Clock/>
      <Toggle/>
      <Greeting isLoggedIn={false}/>
    </div>
    );
  }
}

export default App;


  
