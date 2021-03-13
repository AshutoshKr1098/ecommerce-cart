import React from "react";
const Product = (props) => {
  return (
    <div>
      <div class="ui card">
        <div
          class="image"
          style={{ width: "100%", height: "350px", overflow: "hidden" }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={props.image}
            alt={props.title}
          />
        </div>
        <div class="content" style={{ height: "80px" }}>
          <div class="meta">
            <strong class="date">Price:{Math.ceil(props.price)}$</strong>
          </div>
          <div class="description">{props.title}</div>
        </div>
        <div class="extra content">
          <div class="ui buttons">
            <button class="ui red button">Add to cart</button>
            <div class="or"></div>
            <button class="ui teal button">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
