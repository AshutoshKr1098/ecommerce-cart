import axios from "axios";
export const getProducts = () => {
  return async (dispatch) => {
    const products = await axios.get("https://fakestoreapi.com/products");
    console.log("from actions", products.data);
    dispatch({ type: "FETCH_PRODUCTS", payload: products.data });
  };
};
