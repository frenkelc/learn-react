import React from 'react';
import ReactDOM from 'react-dom';
import './Comment.css';


class comment extends React.Component{
  constructor(props){

  }

  formatDate(date) {
    return date.toLocaleDateString();
  }

  Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

  UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }

  render(){
    return(
      <div className="Comment">
        <UserInfo user={props.auther}/>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
} 
 
