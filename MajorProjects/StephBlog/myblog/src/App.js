import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  componentDidMount () {
    axios.get('http://localhost:3002/allposts').then((res) => {
      this.database = res.data.map(row => (
        <Post key={row.id} id={row.id} date={row.date} title={row.title} image={row.image} words={row.words} />
      ));
    });
  };


  render() {
    return (
<div>
      <header class="header">
        <Router>
          <div>
            <Route path='/' component={App}/>
            <Route path='/post:id' component={Post} />
            <Route path='/signin' component={SignIn} />
            <Route path='newPost' component={AddPost} />
          </div>
        </Router>
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
          <Post/>
          </div>
    );
  }
}

export default App;
