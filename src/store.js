import { configureStore } from "@reduxjs/toolkit";
import { wareH } from "./slice";


export const store = configureStore({
  reducer: {
    house: wareH
  },
});