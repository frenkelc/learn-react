import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import './App.css';
import './index';
import './ComponentsAndProps/FormatDate';
import './ComponentsAndProps/Avatar';
import './ComponentsAndProps/UserInfo';
import './ComponentsAndProps/Commens';
import './StateAndLifecycle/Clock'
import './HandlingEvents/Toggle'
import './ConditionalRendering/Greeting'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
