import { combineReducers } from "redux";
import auth from "./auth";
import { currentProductReducer, productsReducer } from "./product";
import cart from "./cart";

const reducers = combineReducers({
  products: productsReducer,
  currentProduct: currentProductReducer,
  cart,
  auth,
});

export default reducers;
