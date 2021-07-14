import { ADD_TO_CART, DELETE_FROM_CART } from "../constants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case DELETE_FROM_CART:
      const index = state.cartItems.findIndex(
        (item) => item._id === action.payload.id
      );
      let newItems = [...state.cartItems];

      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.log(
          `Cannot remove an item from the cart of ${action.payload.id}`
        );
      }

      return { ...state, cartItems: newItems };
    default:
      return state;
  }
};

export default cartReducer;
