import * as api from "../api/index";
import { AUTH } from "../constants";

export const signIn = (userData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData);

    history.push("/");

    dispatch({ type: AUTH, data: data });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(userData);
    alert(
      "User has successfully been created , Please log in with your account"
    );

    dispatch({ type: AUTH, data: data });
  } catch (error) {
    console.log(error.message);
  }
};
