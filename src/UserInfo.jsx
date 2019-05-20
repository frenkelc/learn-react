import React from 'react';
import ReactDOM from 'react-dom';
import './UserInfo.css';
import './Avatar';

  
  function UserInfo(props){
    return(
      <div className="UserInfo">
       /*<Avatar user={props.user} />*/
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }