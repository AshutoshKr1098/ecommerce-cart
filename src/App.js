import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/component/Navbar";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </BrowserRouter>
    </div>
  );
};

export default App;
