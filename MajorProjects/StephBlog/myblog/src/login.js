import React, {Component} from 'react';

export default class Login extends Component{
  render(){
    return (
      <div>
        <p> Please Log in to add or edit posts </p>
        <button onClick={Authservice.Login}>Login</button>
      </div>
    )
  }
}
