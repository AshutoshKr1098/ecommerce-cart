import React, { useState } from "react";
import "../../assets/styles/CartItem.css";
const CartItem = (props) => {
  return (
    <div className="cart_item_wrapper">
      <div className="cart_item__image">
        <img src={props.image} />
      </div>
      <div className="cart_item__description">
        <h1>{props.name}</h1>
        <p>Price: {Math.round(props.price)}$</p>
        <div className="cart_item__quantity">
          <span>Quantity</span>
          <button className="ui orange button">{props.quantity}</button>
        </div>
      </div>
      <div className="cart_item__changer">
        <button
          className="ui blue button"
          onClick={() => props.increase(props.id)}
        >
          +
        </button>
        <button
          className="ui red button"
          onClick={() => props.decrease(props.id)}
        >
          -
        </button>
        <button
          className="ui green button"
          onClick={() => props.removeItem(props.id)}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default CartItem;
