import React from "react";
const Product = (props) => {
  const addToCartHandler = () => {
    const product = {
      name: props.title,
      image: props.image,
      price: props.price,
      id: props.id,
      quantity: 1,
    };
    props.addToCart(product);
  };
  return (
    <div>
      <div className="ui card">
        <div
          className="image"
          style={{ width: "100%", height: "350px", overflow: "hidden" }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="content" style={{ height: "80px" }}>
          <div className="meta">
            <strong className="date">Price:{Math.ceil(props.price)}$</strong>
          </div>
          <div className="description">{props.title}</div>
        </div>
        <div className="extra content">
          <div className="ui buttons">
            <button className="ui red button" onClick={addToCartHandler}>
              Add to cart
            </button>
            <div className="or"></div>
            <button className="ui teal button">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
