import { combineReducers } from "redux";
import cartReducers from "./cartReducer";
import productReducer from "./productReducer";

export default combineReducers({
  cart: cartReducers,
  product: productReducer,
});
