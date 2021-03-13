const cartReducer = (store = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...store, action.payload];
    default:
      return store;
  }
};

export default cartReducer;
