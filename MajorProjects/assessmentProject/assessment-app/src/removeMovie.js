import React, {Component} from 'react';
import axios from 'axios';

export default class RemoveMovie extends Component{
  constructor(props){
    super(props)
    this.state = {
      movie:"",
      rating: ""
    }
    this.updateMovie = this.updateMovie.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  deleteMovie(movieName){
 return
    axios.put('http://localhost:3000/delete/movie',{
      moviename:movieName.toLowerCase()
    }).then(res=>{
      this.setState({
        movie:""
      })
    })
  }

  updateMovie(event) {
    this.setState({
      movie: event.target.value
    });
  }

  deleteRating(rating){
     return
    axios.put('http://localhost:3000/delete/rating',{
      rating:rating
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
      <div style={styles.rem}>
        <input value={this.state.movie} onChange={this.updateMovie} placeholder="Movie" />
        <input value={this.state.rating} onChange={this.updateRating} placeholder="Rating" />
        <button onClick={()=>(this.deleteProduct(this.state.product))} onClick={() =>(this.deleteRating(this.state.rating))} style={styles.button}>Remove Product</button>
        {console.log(JSON.stringify(this.props.products, null,2) + "  in remove")}
      </div>
    )
  }
