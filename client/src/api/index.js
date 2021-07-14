import axios from "axios";

const API = axios.create({
  baseURL: "https://vcart-app.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getAllProducts = () => API.get("/products");
export const getProductById = (id) => API.get(`/products/${id}`);

export const signIn = (userData) => API.post("/users/signin", userData);
export const signUp = (userData) => API.post("/users/signup", userData);
