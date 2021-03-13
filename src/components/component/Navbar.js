import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <span>
              Cart <span className="cartlogo__badge">0</span>
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
export default Navbar;
