import React from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';

  function Avatar(props){
    return(
      <img
        ClassName="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
  }
  