import React, {Component} from 'react';
import axios from 'axios';
import '../../blog.css';


export default class Post extends Component {
  render() {
    return (
    <div className="post">
        <div className="date">
            <p>{this.props.date}</p>
        </div>
        <div className="postTitle">
            <h2>{this.props.title}</h2>
        </div>
        <div className="postImage">
            <img />
        </div>
        <div className="postText">
{this.props.words}
        </div>
    </div>
  )
  }
}
