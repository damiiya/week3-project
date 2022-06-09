import { configureStore } from "@reduxjs/toolkit";
import user from "./user.js";

const store = configureStore({
  reducer: {
    user: user.reducer,
  },
});

export default store;
