import React {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class NavBar extends Component {
  render(){
    <div>
      <Router>
        <div>
          <Route path='/' component={App}/>
          <Route path='/post:id' component={post} />
          <Route path='/addPost' component={addPost} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
      <div>
        <div class="header">
            <img class="headerImage" />
            <input class="headerInput" />
            <button class="headerButton">
              Search
            </button>
            <Link to='/' class="homeLink">Home</Link>
            <Link to= '/post' class="latestLink">Latest</Link>
            <Link to='/login' class="signIn">Sign In</Link>
        </div>
      </div>
    </div>
  }
}
