import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components&Props/FormatDate';
import './Components&Props/Avatar';
import './Components&Props/UserInfo';
import './Components&Props/Commens';

<div id="root"></div>

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementByIg('root')
);

  
