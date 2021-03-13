import React from "react";
import { connect } from "react-redux";
const Carts = () => {
  return <h1>Carts</h1>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Carts);
