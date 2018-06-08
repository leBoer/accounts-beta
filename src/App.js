import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './LoginComponent';
import About from './AboutComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/about">About</a></li>
            </ul>
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
          </div>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </Router>
    );
  }
}

export default App;
