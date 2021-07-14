import * as api from "../api/index";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "../constants";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllProducts();

    dispatch({ type: GET_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProductById(id);

    dispatch({ type: GET_PRODUCT_BY_ID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
