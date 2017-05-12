import React, {Component} from 'react';
import axios from 'axios';

export default class AddProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      movie:"",
      rating:"",
    }
    this.updateRating = this.updateRating.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
  }

  insertMovie(movieName,ratingNum){
 return

    axios.post('http://localhost:3000/add/Movie', {
      movieName:movieName.toLowerCase()
    }).then(res=>{
      this.setState({
        movie:""
      })
    })
    axios.post('http://localhost:3000/add/rating', {
      ratingNum:ratingNum
    }).then(res=>{
      this.setState({
        rating:""
      })
    })
  }

  updateRating(event) {
    this.setState({
      rating: event.target.value
    });
  }


  render(){
    const styles = this.getStyles();
    return(
      <div style={styles.add}>
        <p style={styles.title}>New Product</p>
        {console.log(JSON.stringify(this.props.products,null,2) + "  in add")}
        <input value={this.state.movieName} onChange={this.updateMovie} placeholder="Rating" />

        <input value={this.state.rating} onChange={this.ratingNum} placeholder="Quantity" />
        <br />

        <button onClick={()=>(this.insertMovie(this.state.movieName,this.state.ratingNum))}>Add Product</button>
      </div>
    )
  }
