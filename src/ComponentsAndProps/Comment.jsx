import React from 'react';
import './Comment.css';


class Comment extends React.Component{
  constructor(props){
    super(props);
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
        {/* <Avatar user={props.user} /> */}
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }

  render(){
    return(
      <div className="Comment">
        {/* <UserInfo user={props.auther}/> */}
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">
          {this.formatDate(this.props.date)}
        </div>
      </div>
    );
  }
} 
 
export default Comment;
