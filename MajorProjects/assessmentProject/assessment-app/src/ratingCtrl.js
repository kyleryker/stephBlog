import React, {Component} from 'react';
import axios from 'axios';

export default class ItemCtrl extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputVal: ""
    };
    this.setRating = this.setRating;
    this.updateInputValue = this.updateInputValue.bind(this);
  }



  setQuantity(id,num){
    if(Number(num) !== 0 && !Number(num) || Number(num) === this.props.rating) return
    axios.put('http://localhost:3000/edit/rating',{
      id:id,
      rating:num
    }).then(res=>{
      console.log(res)
      this.setState({
        inputVal: "#"
      })
    })
  }

  updateInputValue(event) {
    this.setState({
      inputVal: event.target.value
    });
    //console.log(this.state.inputVal);
  }

  render(){
    return(
      <div style={styles.inventory}>

        <div style={styles.product}>
          <p>{this.props.movie}</p>
        </div>
        {/* End div for PRODUCT. */}

        <div style={styles.quantity}>
          <p>{this.props.rating}</p>
        </div>
        {/* End div for QUANTITY. */}

        <div>
          <input value={this.state.inputVal} onChange={this.updateInputValue} placeholder="enter new rating" style={styles.quanEditInput}/>

          <button onClick={()=>(this.setQuantity(this.props.id,this.state.inputVal))} style={styles.quanEditButton}>Set #</button>
        </div>
        {/* End div for quantity EDIT. */}
      </div>
    )
  }
