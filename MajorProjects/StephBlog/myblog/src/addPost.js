import React, {Component} from 'react';
import axios from 'axios';



export default class Post extends Component {
constructor(props){
  super( props );
  this.state = {
    Title = '',
    Date = '',
    Picture = '',
    Text = ''
  }
}

handleButtonPress(event) {
  this.setState({
    Title=newTitle,
    Date=newDate,
    Picture=newPicture,
    Text=newText
  })

}
  render() {
    <div>
    <input value=newTitle />
    <input value=newDate />
    <input value=newPicture />
    <input value=newText />
    <button />
    </div>

}
}
