import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      product: {}
    };
    this.cancel = this.cancel.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    ProductService.getProductsById(this.state.id)
      .then(response => {
        this.setState({ product: response.data });
      })
      .catch(err => console.error(err));
  }

  deleteProduct() {
    ProductService.deleteProductById(this.state.id)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => console.error(err));
  }

  cancel() {
    this.props.history.push('/');
  }

  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <h1>Delete Product</h1>
        <h3>Confirm deletion of the following product:</h3>
        <div className="card">
          <div className="card-body">
            <p><strong>Product ID:</strong> {product.id}</p>
            <p><strong>Product Name:</strong> {product.name}</p>
            <p><strong>Product Price:</strong> {product.price}</p>
            <p><strong>Product Quantity:</strong> {product.quantity}</p>
          </div>
        </div>
        <button className="btn btn-danger" onClick={this.deleteProduct}>Delete</button>
        <button className="btn btn-success" onClick={this.cancel}>Cancel</button>
      </div>
    );
  }
}

export default DeleteProduct;
