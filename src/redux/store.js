import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import likeSlice from "./likeSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    like: likeSlice,
  },
});

export default store;
