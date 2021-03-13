import axios from "axios";
export const getProducts = () => {
  return async (dispatch) => {
    const products = await axios.get("https://fakestoreapi.com/products");
    console.log("from actions", products.data);
    dispatch({ type: "FETCH_PRODUCTS", payload: products.data });
  };
};

export const addToCart = (product) => {
  console.log("action called");
  return (dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
};

export const increaseCartItem = (id) => {
  return (dispatch) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };
};

export const decreaseCartItem = (id) => {
  return (dispatch) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };
};

export const removeCartItem = (id) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
};
