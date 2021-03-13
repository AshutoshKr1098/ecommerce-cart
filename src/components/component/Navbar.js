import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../assets/styles/Navbar.css";
const Navbar = (props) => {
  const calculateTotalItemInCart = () => {
    let totalItems = 0;
    props.cart.map((item) => (totalItems += item.quantity));
    return totalItems;
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h2>MERN Shopping Cart</h2>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <span>
              Cart{" "}
              <span className="cartlogo__badge">
                {calculateTotalItemInCart()}
              </span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Navbar);
