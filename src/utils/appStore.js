import { configure } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configure({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
