import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount () {
    axios.get('http://localhost:3001/')
  }


  render() {
    return (
<div>
      <header class="header">
          <img class="headerImage" />
          <input class="headerInput" />
          <button class="headerButton">
            Search
          </button>
          <a class="homeLink">Home</a>
          <a class="latestLink">Latest</a>
          <a class="signIn">Sign In</a>
      </header>
      <div class="sidebar">
        <h2 class="sidebarHeader">Other Posts</h2>
          <ul class="sidebarList">
              <li>Picture</li>
              <li>Picture</li>
              <li>Picture</li>
          </ul>
      </div>
      <div class="blog">
          <h1 class="blogHeader"> Bath Bomb Crazy </h1>
          <h3 class="blogSubHeader"> Tutorials on how to make your own bath and body products. </h3>
          </div>
          <Post>
          </div>
    );
  }
}

export default App;
