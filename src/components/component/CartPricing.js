import React from "react";
import { connect } from "react-redux";
const calculatePrice = (cart) => {
  let finalPrice = 0;
  cart.forEach((item) => {
    finalPrice += item.quantity * Math.round(item.price);
  });
  return finalPrice;
};

const CartPricing = (props) => {
  const renderItems = () => {
    let num = 0;
    return (
      <ul style={{ listStyle: "none" }}>
        {props.cart.map((item) => {
          num++;
          return (
            <li>{`item ${num} : ${Math.round(item.price)} x ${
              item.quantity
            }`}</li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="pricing">
      <h1>Final Price</h1>
      <div>{renderItems(props.cart)}</div>
      <p>{calculatePrice(props.cart)}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { cart: state.cart };
};
export default connect(mapStateToProps)(CartPricing);
