import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/component/Navbar";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
