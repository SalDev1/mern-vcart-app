import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "../constants";

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return [...products, action.payload];
    default:
      return products;
  }
};

const currentProductReducer = (state = { currentProduct: null }, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID:
      return (state.currentProduct = action.payload);
    default:
      return state;
  }
};

export { productsReducer, currentProductReducer };
