import React from 'react';
import ReactDOM from 'react-dom';
import './Comment.css';
import './UserInfo';


  function Comment(props){
    return(
      <div className="Comment">
        /*<UserInfo user={props.auther}/>*/
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }