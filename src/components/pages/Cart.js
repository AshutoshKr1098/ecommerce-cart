import React from "react";
import { connect } from "react-redux";
import "../../assets/styles/Cart.css";
import CartItem from "../component/CartItem";
import { increaseCartItem, decreaseCartItem } from "../../actions";
const Carts = (props) => {
  const renderCartList = () => {
    return props.cart.map((item) => {
      return (
        <div key={item.id}>
          <CartItem
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            increase={props.increaseCartItem}
            decrease={props.decreaseCartItem}
            quantity={item.quantity}
          />
        </div>
      );
    });
  };
  return (
    <div className="cart">
      {props.cart.length > 0 ? renderCartList() : <h1>No Item in cart</h1>}
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state.cart);
  return { cart: state.cart };
};
export default connect(mapStateToProps, { increaseCartItem, decreaseCartItem })(
  Carts
);
