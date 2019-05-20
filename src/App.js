import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './FormatDate';
import './Avatar';
import './UserInfo';
import './Commens';

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

  
