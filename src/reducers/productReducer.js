const productReducer = (store = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    default:
      return store;
  }
};

export default productReducer;
