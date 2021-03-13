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
