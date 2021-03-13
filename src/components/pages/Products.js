import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions";
import Product from "../component/Product";
import "../../assets/styles/Products.css";
class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  renderProducts = () => {
    return this.props.products.map((product) => {
      return (
        <div className="product__card">
          <Product
            image={product.image}
            title={product.title}
            price={product.price}
          />
          ;
        </div>
      );
    });
  };
  render() {
    return (
      <div className="products">
        {this.props.products.length > 0 ? (
          this.renderProducts()
        ) : (
          <h1>No product found</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.product);
  return { products: state.product };
};
export default connect(mapStateToProps, { getProducts })(Products);
