import React, {Component} from 'react';
import axios from 'axios';

import ItemCtrl from './ItemCtrl';
import AddProduct from './AddProduct';
import RemoveProduct from './RemoveProduct';

class App extends Component {
    constructor() {
        super();
        this.state = {
          dbRows: [],
          prodArray: [],
          searchTerm: "",
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this)
    };

    updateSearchTerm(evt) {
      this.setState({
        searchTerm: evt.target.value
      });
    }

    componentDidMount() {
        axios.get('http://localhost:3000/full').then((res) => {
            this.database = res.data.sort((a,b)=>a.productname > b.productname).map(row => (
                <ItemCtrl key={row.movieid} id={row.movieid} movieName={row.movie} rating={row.rating}/>
            ));
        });
    }

    render() {
        const dbRowsDisplay = this.state.searchTerm ? this.state.dbRows
        .map(row => (
            <ItemCtrl key={row.productid} id={row.productid} pName={row.productname} qAmt={row.quantity}/>
        )) : this.state.dbRows
        .map(row => (
            <ItemCtrl key={row.productid} id={row.productid} pName={row.productname} qAmt={row.quantity}/>
        ))

        return (
         <div>
                <div>
                  {dbRowsDisplay}
                </div>
                {/* End div for dynamically updated inventory. */}

               {/* BEGIN AddProduct Component */}
               <div>
                 <AddProduct products={this.state.prodArray} />
               </div>

               {/* BEGIN RemoveProduct Component */}
               <div>
                 <RemoveProduct products={this.state.prodArray} />
               </div>

            </div>
        )
    }

export default App;
