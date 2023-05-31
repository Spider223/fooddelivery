import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },

    addToCart: (state, action) => {
      console.log(action);
      const item = action.payload;
      const alreadyExist = state.cart.find((data) => data._id === item._id);

      if (alreadyExist) {
        alreadyExist.quantity += 1;
      } else {
        state.cart = [item, ...state.cart];
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item._id !== itemId);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increase: (state, { payload }) => {
      const cartIndex = state.cart.findIndex(
        (item) => item._id === payload._id
      );
      state.cart[cartIndex].quantity += 1;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decrease: (state, { payload }) => {
      const cartIndex = state.cart.findIndex(
        (item) => item._id === payload._id
      );
      if (state.cart[cartIndex].quantity > 1) {
        state.cart[cartIndex].quantity -= 1;
      } else if (state.cart[cartIndex].quantity === 1) {
        const inCartItems = state.cart.filter(
          (item) => item._id !== payload._id
        );
        state.cart = inCartItems;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, clearCart, removeItem, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
