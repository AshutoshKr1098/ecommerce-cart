import React from "react";
import { connect } from "react-redux";
import "../../assets/styles/Cart.css";
import CartItem from "../component/CartItem";
import CartPricing from "../component/CartPricing";
import {
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
} from "../../actions";
import "./Cart.css";
const Carts = (props) => {
  const renderCartList = () => {
    return (
      <div>
        {props.cart.map((item) => {
          return (
            <div key={item.id}>
              <CartItem
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                increase={props.increaseCartItem}
                decrease={props.decreaseCartItem}
                removeItem={props.removeCartItem}
                quantity={item.quantity}
              />
            </div>
          );
        })}
      </div>
    );
  };
  const showCart = () => {
    return (
      <div className="displayCartPage">
        {renderCartList()}
        <CartPricing />
      </div>
    );
  };
  return (
    <div className="cart">
      {props.cart.length > 0 ? showCart() : <h1>No Item in cart</h1>}
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state.cart);
  return { cart: state.cart };
};
export default connect(mapStateToProps, {
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
})(Carts);
