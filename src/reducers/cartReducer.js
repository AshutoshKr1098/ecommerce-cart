const cartReducer = (store = [], action) => {
  switch (action.type) {
    case "GET_CART":
      return [...store, action.payload];
    default:
      return store;
  }
};

export default cartReducer;
