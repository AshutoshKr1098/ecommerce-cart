const productReducer = (store = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return [...store, action.payload];
    default:
      return store;
  }
};

export default productReducer;
