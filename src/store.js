import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice";
import { todoReducer } from "./todoSlice";

const store = configureStore({
  reducer: {
    baburav: counterReducer,
    shyam: todoReducer,
  },
});
export default store;