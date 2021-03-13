const cartReducer = (store = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...store, action.payload];
    case "INCREASE_ITEM": {
      const newStore = store.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
      return newStore;
    }
    case "DECREASE_ITEM": {
      const newStore = store.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
          return item;
        }
        return item;
      });
      return newStore;
    }
    case "REMOVE_ITEM": {
      const newStore = store.filter((item) => item.id !== action.payload);
      return newStore;
    }
    default:
      return store;
  }
};

export default cartReducer;
