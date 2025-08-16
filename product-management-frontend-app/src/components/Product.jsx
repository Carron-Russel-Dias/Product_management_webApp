import React, { Component } from 'react'
import ProductService from '../services/ProductService'

 class Product extends Component {

    constructor(props) {
   super(props)
   this.state = {
id: this.props.match.params.id,
products :{}

   }

    this.cancel = this.cancel.bind(this);

    }


   componentDidMount(){
     ProductService.getProductsById(this.state.id).then(
        
        response => {this.setState({products: response.data})}
        
        )
    
    }

    cancel(){
        
        this.props.history.push('/')
    }

  render() {
    return (
      <div className='container'>
      <h1>View Product Page </h1>
      <div className="card">
          <div className="card-body">
            <p><strong>Product ID:</strong> {this.state.products.id}</p>
            <p><strong>Product Name:</strong> {this.state.products.name}</p>
            <p><strong>Product Price:</strong> {this.state.products.price}</p>
            <p><strong>Product Quantity:</strong> {this.state.products.quantity}</p>
          </div>
      </div>
        
        
        
        <button className="btn btn-danger" onClick ={this.cancel}>cancel</button>

      </div>
    )
  }
}

export default Product